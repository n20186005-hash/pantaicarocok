# Pantai Carocok Guide — 完整下载包

该仓库包含 Pantai Carocok Guide 的 Astro 源代码、已构建的 `dist/` 静态网站、Cloudflare Workers Static Assets 配置、双语文案与研究记录，以及网站视觉中使用的本地图片素材。

| 目录或文件 | 内容 |
| --- | --- |
| `src/` | Astro 页面、组件、双语内容、样式和结构化数据。 |
| `public/` | favicon、manifest 和 robots 配置。 |
| `dist/` | 已构建的静态网站输出。 |
| `public/images/` | 项目原创海岸示意图、航图纹理与档案插图；品牌徽记为 `public/favicon.svg`。 |
| `wrangler.json` | Cloudflare Workers Static Assets 配置。 |
| `package.json`、`pnpm-lock.yaml` | 精确锁定的依赖和构建脚本。 |
| `ideas.md`、`research-notes.md` | 设计方向与公开资料研究记录。 |

## 使用说明

在具有 Node.js 22.13.0 与 pnpm 10.11.1 的环境中执行：

```bash
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

图片位于 `public/images/`，使用本地 `/images/` 路径，由 Astro 原样复制到 `dist/images/`。无需另行上传到外部静态存储。图片来源资料见 `images/README.md`；未核实授权的旧照片已移除，首屏与岸线采用明确标注的项目原创海岸示意图。

根 `wrangler.json` 配置 Worker 与 `ASSETS`。Worker 保留路径和查询参数，将已知 HTTP/www 地址规范到 HTTPS 主域；缺失页面返回真实 404 和 noindex。用根配置执行 `wrangler deploy`；本地技术测试为 `node scripts/worker-test.mjs` 与 `node scripts/consent-test.mjs`。
