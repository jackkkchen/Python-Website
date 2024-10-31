export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  
  // 只保留一个 modules 配置
  modules: ['@nuxt/content'],
  
  content: {
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3
      },
      prism: {
        theme: false
      }
    },
    nestedProperties: ['author.name']
  },
  
  router: {
    base: '/Python-Website/'
  },
  css: [
    'prism-themes/themes/prism-material-oceanic.css' // 在这里引入主题
  ],
  
  generate: {
    fallback: true,
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content('tutorial').fetch()
      return files.map(file => file.path)
    }
  },
  
  head: {
    title: 'python_web',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [],
  plugins: [],
  components: true,
  buildModules: [],
  
  build: {}
}