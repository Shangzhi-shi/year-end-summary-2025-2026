# Repository Guidelines

## 项目结构与模块组织
- 入口文件在 `index.tsx`（挂载 React）与 `App.tsx`（Reveal.js 幻灯片主组件）。
- 可复用 UI 组件位于 `components/`，例如 `ModuleCard.tsx`、`GallerySlide.tsx`、`Navigation.tsx`。
- 业务内容与静态数据集中在 `constants.tsx` 与 `types.ts`，避免在组件中硬编码文本。
- 全局样式、Tailwind CDN、Reveal.js 主题配置在 `index.html`，如需全局样式优先在此维护。
- 构建与类型配置在 `vite.config.ts` 和 `tsconfig.json`，应用元数据在 `metadata.json`。

## 构建、测试与开发命令
- `npm install` - 安装依赖。
- `npm run dev` - 启动本地开发服务器。
- `npm run build` - 生成生产构建产物。
- `npm run preview` - 本地预览生产构建。

## 编码风格与命名规范
- 采用 TypeScript + React 函数组件，组件与文件名使用 `PascalCase`。
- 保持 2 空格缩进，字符串使用单引号以对齐现有风格。
- 变量与函数使用 `camelCase`，导出的常量使用 `UPPER_SNAKE_CASE`。
- 组件样式优先使用 Tailwind 工具类，只有全局样式才调整 `index.html` 中的 `<style>`。

## 测试指南
- 当前未配置自动化测试与 `test` 脚本。
- 修改后请运行 `npm run dev` 手动检查关键幻灯片与交互。
- 如新增测试，建议使用 `*.test.tsx` 并补充对应运行命令。

## 提交与合并请求规范
- 本仓库无 Git 历史记录，建议使用简洁祈使式提交或 Conventional Commits（如 `feat:`、`fix:`）。
- PR 需包含变更摘要、UI/内容改动清单，并附上截图或录屏。
- 若新增环境变量或配置变更，请在 PR 描述中明确说明。

## 安全与配置提示
- 本地开发需在 `.env.local` 配置 `GEMINI_API_KEY`，严禁提交密钥。
- Reveal.js 的 `hash` 与 `history` 已禁用，除非确认运行环境兼容再开启。
