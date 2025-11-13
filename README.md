# Laper - 世界首款AI剧作软件落地页

这是一个为 Laper AI 剧作软件设计的产品落地页，使用 Next.js、Tailwind CSS 和 Shadcn UI 构建。

## 特性

- 🎨 现代化的设计风格，参考提供的设计图片
- 📱 完全响应式设计，支持所有设备
- ⚡ 使用 Next.js 14 构建，性能优异
- 🎯 包含完整的落地页功能：Hero Section、功能介绍、用户评价、等待列表等
- 💌 集成等待列表注册功能
- 🌈 使用 Tailwind CSS 实现美观的渐变和动画效果

## 技术栈

- **前端框架**: Next.js 14
- **CSS 框架**: Tailwind CSS
- **UI 组件库**: Shadcn UI
- **图标**: Lucide React
- **语言**: TypeScript

## 快速开始

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 项目结构

```
├── app/                 # Next.js 13+ App Router
│   ├── globals.css      # 全局样式
│   ├── layout.tsx       # 根布局
│   └── page.tsx         # 主页
├── components/          # React 组件
│   ├── ui/              # 基础 UI 组件
│   ├── hero-section.tsx
│   ├── features-section.tsx
│   ├── testimonials-section.tsx
│   ├── waitlist-section.tsx
│   ├── cta-section.tsx
│   └── footer.tsx
├── lib/                 # 工具函数
└── public/              # 静态文件
```

## 功能模块

### Hero Section
- Laper Logo 展示
- 核心宣传语："世界首款AI剧作软件"
- 副标题介绍
- 主要行动按钮（下载/加入等待列表）

### 功能介绍区域
- AI智能创作
- 专业剧本格式
- 创意辅助工具
- 协作编剧功能
- 快速生成
- 多语言支持

### 用户评价区域
- 真实用户反馈
- 评分展示
- 行业专家推荐

### 等待列表功能
- 邮箱注册表单
- 表单验证
- 成功提交反馈
- 统计数据展示

### CTA 区域
- 最终行动召唤
- 产品优势总结
- 下载按钮

### Footer
- 公司信息
- 社交媒体链接
- 法律声明

## 部署

```bash
npm run build
npm start
```

## 许可证

此项目仅用于演示目的。