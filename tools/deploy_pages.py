#!/usr/bin/env python3
"""
把本地 dist/ 发布到 GitHub Pages（gh-pages 分支方案）。
不依赖 .github/workflows（GitHub API 会拦截工作流文件），完全用 Git Data API 完成。

用法: python3 deploy_pages.py <项目目录> <owner/repo> [分支]
"""
import base64
import json
import os
import subprocess
import sys
import urllib.request
import urllib.error

TOKEN = os.environ["GITHUB_TOKEN"]
API = "https://api.github.com"


def req(method, path, payload=None):
    data = json.dumps(payload).encode() if payload is not None else None
    r = urllib.request.Request(
        API + path, data=data, method=method,
        headers={
            "Authorization": f"token {TOKEN}",
            "Accept": "application/vnd.github+json",
            "User-Agent": "mavis-deploy",
            "Content-Type": "application/json",
        },
    )
    try:
        with urllib.request.urlopen(r, timeout=180) as resp:
            body = resp.read()
            if not body:
                return {"__empty": True}
            return json.loads(body)
    except urllib.error.HTTPError as e:
        print("  ✗", method, path, "→", e.code, e.read().decode()[:200])
        raise


def build_dist(root):
    out = os.path.join(root, "dist")
    if not os.path.isdir(out):
        subprocess.run(["npm", "run", "build"], cwd=root, check=True)
    files = []
    for dp, dn, fn in os.walk(out):
        dn[:] = [d for d in dn if d != ".git"]
        for f in fn:
            full = os.path.join(dp, f)
            files.append((os.path.relpath(full, out).replace(os.sep, "/"), full))
    return files


def main():
    root = os.path.abspath(sys.argv[1])
    repo = sys.argv[2]
    branch = sys.argv[3] if len(sys.argv) > 3 else "gh-pages"

    files = build_dist(root)
    print(f"发布 {len(files)} 个文件 → {repo}@{branch}")
    for rel, _f in files:
        print("   ", rel)

    entries = []
    for rel, full in files:
        content = open(full, "rb").read()
        blob = req("POST", f"/repos/{repo}/git/blobs", {
            "content": base64.b64encode(content).decode(), "encoding": "base64",
        })
        entries.append({"path": rel, "mode": "100644", "type": "blob", "sha": blob["sha"]})

    tree = req("POST", f"/repos/{repo}/git/trees", {"tree": entries})

    parent = None
    try:
        parent = req("GET", f"/repos/{repo}/git/ref/heads/{branch}")["object"]["sha"]
    except urllib.error.HTTPError:
        pass

    commit = req("POST", f"/repos/{repo}/git/commits", {
        "message": "publish build",
        "tree": tree["sha"],
        **({"parents": [parent]} if parent else {}),
    })

    # 创建或更新分支
    try:
        req("PATCH", f"/repos/{repo}/git/refs/heads/{branch}", {"sha": commit["sha"], "force": True})
    except urllib.error.HTTPError:
        req("POST", f"/repos/{repo}/git/refs", {"ref": f"refs/heads/{branch}", "sha": commit["sha"]})

    # 把 Pages 指向该分支
    try:
        req("PUT", f"/repos/{repo}/pages", {
            "source": {"branch": branch, "path": "/"}, "build_type": "legacy",
        })
        print("  Pages 已指向分支", branch)
    except urllib.error.HTTPError as e:
        print("  Pages 配置需手动切换分支:", e.code)

    print(f"✅ 发布完成 → https://{repo.split('/')[0]}.github.io/{repo.split('/')[1]}/")


if __name__ == "__main__":
    main()
