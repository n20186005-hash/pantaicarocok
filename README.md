# Pantai Carocok Guide — 完整下载包

该压缩包包含 Pantai Carocok Guide 的 Astro 源代码、已构建的 `dist/` 静态网站、Cloudflare Workers Static Assets 配置、双语文案与研究记录，以及网站视觉中使用的本地图片素材。

| 目录或文件 | 内容 |
| --- | --- |
| `src/` | Astro 页面、组件、双语内容、样式和结构化数据。 |
| `public/` | favicon、manifest 和 robots 配置。 |
| `dist/` | 已构建的静态网站输出。 |
| `assets/` | 真实景点摄影、航图纹理、档案插图及品牌徽记原文件。 |
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

图片文件已一并保存在 `assets/`。当前源代码保留了已交付版本的 `/manus-storage/` 图片引用；若迁移到其他托管环境，请先将 `assets/` 上传到新的静态存储位置，再将这些引用替换为相应路径。
