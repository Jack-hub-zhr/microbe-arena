#!/usr/bin/env python3
"""
用 GitHub REST API 推送一个目录到仓库（绕过 git 的 gnutls TLS 握手问题）。

用法:  python3 push_to_github.py <本地目录> <owner/repo> [分支]
"""
import base64
import json
import os
import subprocess
import sys
import urllib.request

TOKEN = os.environ["GITHUB_TOKEN"]
API = "https://api.github.com"


def req(method, path, payload=None, raw=False):
    data = json.dumps(payload).encode() if payload is not None else None
    r = urllib.request.Request(
        API + path,
        data=data,
        method=method,
        headers={
            "Authorization": f"token {TOKEN}",
            "Accept": "application/vnd.github+json",
            "User-Agent": "mavis-deploy",
            "Content-Type": "application/json",
        },
    )
    with urllib.request.urlopen(r, timeout=120) as resp:
        body = resp.read()
    return body if raw else json.loads(body)


def collect(root):
    """返回 (路径列表, 是否被 git 跟踪) —— 直接用 git ls-files 保证与提交一致"""
    try:
        out = subprocess.run(
            ["git", "-C", root, "ls-files"],
            capture_output=True, text=True, check=True,
        ).stdout.split("\n")
        files = [f for f in out if f]
    except subprocess.CalledProcessError:
        files = []
        for dp, dn, fn in os.walk(root):
            dn[:] = [d for d in dn if d not in (".git", "node_modules", "dist")]
            for f in fn:
                p = os.path.relpath(os.path.join(dp, f), root)
                files.append(p)
    return files


def main():
    root = os.path.abspath(sys.argv[1])
    repo = sys.argv[2]
    branch = sys.argv[3] if len(sys.argv) > 3 else "main"

    files = collect(root)
    print(f"推送 {len(files)} 个文件 → {repo}@{branch}")

    entries = []
    for rel in files:
        with open(os.path.join(root, rel), "rb") as fh:
            content = fh.read()
        blob = req(
            "POST",
            f"/repos/{repo}/git/blobs",
            {"content": base64.b64encode(content).decode(), "encoding": "base64"},
        )
        entries.append({
            "path": rel,
            "mode": "100755" if os.access(os.path.join(root, rel), os.X_OK) else "100644",
            "type": "blob",
            "sha": blob["sha"],
        })
        print(f"  blob {rel}")

    # GitHub 的底层 tree API 禁止写入 .github/**（防工作流注入），这些路径改走 Contents API
    bulk = [e for e in entries if not e["path"].startswith(".github/")]
    special = [e for e in entries if e["path"].startswith(".github/")]

    tree = req("POST", f"/repos/{repo}/git/trees", {"tree": bulk})
    parent = None
    try:
        ref = req("GET", f"/repos/{repo}/git/ref/heads/{branch}")
        parent = ref["object"]["sha"]
    except urllib.error.HTTPError:
        pass

    commit = req(
        "POST",
        f"/repos/{repo}/git/commits",
        {
            "message": "微生物进化大赛 · Petri Arena — 真实世界演化引擎 + Liquid Glass 重构",
            "tree": tree["sha"],
            **({"parents": [parent]} if parent else {}),
        },
    )
    req("PATCH", f"/repos/{repo}/git/refs/heads/{branch}", {"sha": commit["sha"], "force": True})

    # .github/** 走 Contents API 单独提交
    for e in special:
        content = open(os.path.join(root, e["path"]), "rb").read()
        try:
            existing = req("GET", f"/repos/{repo}/contents/{e['path']}")
            sha = existing.get("sha")
        except urllib.error.HTTPError:
            sha = None
        payload = {
            "message": f"update {e['path']}",
            "content": base64.b64encode(content).decode(),
            "branch": branch,
        }
        if sha:
            payload["sha"] = sha
        try:
            req("PUT", f"/repos/{repo}/contents/{e['path']}", payload)
            print(f"  contents-api {e['path']}")
        except urllib.error.HTTPError as err:
            # GitHub 的 API 会拦截 .github/workflows/**（防工作流注入），提示用户改用 git push
            print(f"  ⚠ {e['path']} 被 GitHub API 拦截（{err.code}）—— 请用 git push 手动提交该文件")

    print(f"✅ 提交完成: {commit['sha'][:10]}  →  https://github.com/{repo}/tree/{branch}")


if __name__ == "__main__":
    main()
