import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "雪风Nanoda",
  description: "雪风Nanoda",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/wd.md' }
    ],

    sidebar: [
      {
        text: '文档列表',
        items: [
          { text: '碧蓝航线WIKI', link: '/blhxwiki' },
          { text: '签到系统', link: '/qd' },
          { text: '大模型', link: '/mox' },
          { text: '用户协议', link: '/user' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
