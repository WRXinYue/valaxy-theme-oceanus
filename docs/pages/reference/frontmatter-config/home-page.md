---
title: HomePage
title_zh-CN: 主页
categories:
  - frontmatter-config
end: true
---

主题提供了一个首页布局，也可以在[此站点首页](http://oceanus.wrxinyue.org/)看到。可以通过 frontmatter 指定 `layout: home` 在任何页面上使用它

```md
---
layout: home
---
```

## Hero 部分

通过 `themeConfig.hero` 进行配置，详情见 [主题配置-主页-hero](/reference/theme-config/home-page)

## FeaturedArticles 部分

```ts
export type FeaturedArticles = Partial<{
  title: string
  subtitle: string
  description: string
  text: string

  articles: Partial<{
    title: string
    cover: string
    tags: string
    excerpt: string
  }[]>
}>
```

## Features

```md
---
features:
  cards:
    - title: 简单
      details: 无需复杂配置，开箱即用，适合快速构建文档网站
    - title: 关联式导航
      details: 每个一级导航可绑定对应的二级导航，一级导航和二级导航支持绑定相应的侧边栏，形成清晰的导航结构
    - title: 版本控制与历史记录
      details: 集成 `valaxy-addon-git-log`，支持显示贡献者信息，查看不同版本的更改记录以及历史内容，便于追踪内容演变
    - title: 简洁和现代
      details: 页面设计极其简约，强调内容和信息的可读性，去除多余装饰，采用大量留白以突出主要内容
    - title: 灵活
      details: 用户可以根据需求定制组件，并进行自由配置，满足个性化使用场景
    - title: 微动画
      details: 使用 subtle 的悬停动画和交互反馈，动画过渡流畅而不分散注意力
---
```

```ts
export type Features = Partial<{
  title: string
  subtitle: string
  text: string

  cards: Partial<{
    num: string
    title: string
    icon: string
    details: string
  }[]>
}>
```

## Contribution

```ts
export type Contributors = Partial<{
  title: string
  subtitle: string
  text: string
}>
```

## GetStarted

```md
---
getStarted:
  title: Start building with Vite
  text: Prepare for a development environment that can finally keep pace with the speed of your mind.
  button: Become a Client
  cards:
    - img: https://vite.dev/logo.svg
      alt: Vite Logo
      color: '#9499ff'
    - img: /favicon.svg
      alt: Vite Logo
      color: '#17ead9'
    - img: https://valaxy.site/valaxy-logo.png
      alt: Valaxy Logo
      color: '#9333EA'
---
```

```ts
export type GetStarted = Partial<{
  title: string
  text: string
  actions: {
    theme?: 'brand'
    text?: string
    link?: string
  }[]

  cards: {
    img: string
    alt: string
    color?: string
  }[]
}>
```
