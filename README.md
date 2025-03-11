# 清洁服务网站

这是一个基于 Next.js 13 开发的清洁服务公司网站，提供清运、保洁、收纳、消杀、灭鼠等服务。

## 功能特点

- 响应式设计，支持移动端和桌面端
- 现代化的用户界面
- 服务预约系统
- SEO 优化
- 快速加载性能

## 技术栈

- Next.js 13
- TypeScript
- Tailwind CSS
- React
- Framer Motion

## 开始使用

### 环境要求

- Node.js 18.0.0 或更高版本
- npm 或 yarn

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 开发环境运行

```bash
npm run dev
# 或
yarn dev
```

然后在浏览器中访问 [http://localhost:3000](http://localhost:3000)

### 生产环境构建

```bash
npm run build
# 或
yarn build
```

### 生产环境运行

```bash
npm run start
# 或
yarn start
```

## 项目结构

```
src/
  ├── app/              # Next.js 13 App Router
  │   ├── about/       # 关于我们页面
  │   ├── contact/     # 联系我们页面
  │   ├── services/    # 服务项目页面
  │   └── page.tsx     # 首页
  ├── components/      # React 组件
  │   ├── Header.tsx   # 页头组件
  │   └── Footer.tsx   # 页脚组件
  └── styles/         # 样式文件
public/               # 静态资源
  └── images/        # 图片资源
```

## 部署

该项目可以部署到任何支持 Node.js 的服务器上，推荐使用 Vercel 进行部署。

## 贡献

欢迎提交 Issue 和 Pull Request。

## 许可证

MIT 