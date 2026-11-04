# 部署工具

沙箱环境里 `git push` 走 HTTPS 会遇到 gnutls 握手失败（curl 正常），
所以这两个脚本改用 GitHub REST API 完成同样的事。

| 脚本 | 作用 |
| --- | --- |
| `push_to_github.py` | 把本地目录同步到 GitHub 仓库（blob → tree → commit → ref） |
| `deploy_pages.py` | 构建 `dist/` 并发布到 `gh-pages` 分支，Pages 指向该分支 |

用法：

```bash
export GITHUB_TOKEN=＜你的 token＞   # 需要 repo scope
python3 tools/push_to_github.py . <owner>/<repo> main
python3 tools/deploy_pages.py . <owner>/<repo> gh-pages
```

注意：GitHub 的 API 会拦截 `.github/workflows/**` 的写入（防工作流注入），
所以这两个脚本都绕开该路径；Pages 因此走 `gh-pages` 分支而非 Actions。
