import type { ThemeConfig } from 'valaxy-theme-oceanus'
import { defineConfig } from 'valaxy'

export default defineConfig<ThemeConfig>({
  theme: 'oceanus',

  themeConfig: {
    header: {
      favicon: '/favicon-black.svg',

      title: 'Apple Design Wiki',

      nav: [
        {
          text: '主页',
          link: '/',
        },
        {
          text: '文档',
          link: '/docs',
          subNav: [
            {
              text: 'hello-valaxy',
              link: '/docs/hello-valaxy',
            },
            {
              text: '帮助指南',
              link: '',
            },
            {
              text: 'oceanus',
              link: '/docs/oceanus',
            },
            {
              text: '论坛',
              link: '',
            },
            {
              text: '咨询',
              link: '',
            },
          ],
        },
        {
          text: '关于',
          link: '/about',
          subNav: [
            {
              text: '关于我',
              link: '',
            },
            {
              text: '关于站点',
              link: '',
            },
          ],
        },
        {
          text: 'hello-valaxy',
          link: '/hello-valaxy',
        },
      ],
    },

    hero: {
      title: 'Apple Design Wiki',
      motto: '简约、高雅的 Valaxy 文档主题',
      img: 'https://w.wallhaven.cc/full/85/wallhaven-85yl61.png',
    },

    features: [
      {
        icon: '🚀',
        title: 'Fast Performance',
        description: 'Experience lightning-fast loading times and optimized performance.',
      },
      {
        icon: '🎨',
        title: 'Beautiful UI',
        description: 'Create stunning interfaces with our modern and intuitive design tools.',
      },
      {
        icon: '🔒',
        title: 'Secure Platform',
        description: 'Enjoy top-notch security for your data and transactions.',
      },
    ],

    sidebar: [
      'getting-started',
      'config',
      'theme',
      'styles',
      'layouts',
      'components-custom',
      'components-layout',
      'components',
      'components-themes',
      'examples',
      'releases',
      'dev',
    ],

    footer: {
      since: 2024,
      icp: '<a class="oceanus-text" href="https://icp.gov.moe/?keyword=20240132" target="_blank">萌ICP备20240132号</a>',
    },
  },
})
