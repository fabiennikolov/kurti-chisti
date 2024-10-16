import process from 'node:process'
import { pwa } from './config/pwa'
import { appDescription } from './constants/index'

export default defineNuxtConfig({
  ssr: true,
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxtjs/sitemap',
  ],

  image: {

  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://kurti-chisti-izvozva.bg',
    trailingSlash: true,
  },

  experimental: {
    payloadExtraction: false,
    // inlineSSRStyles: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  colorMode: {
    classSuffix: '',
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      ignore: ['/hi'],
    },
  },

  app: {
    seoMeta: {
      ogImage: 'http://localhost:3000/_nuxt/assets/images/background.jpg',
    },
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.svg', sizes: 'any' },
        { rel: 'icon', type: 'image/png', href: '/assets/images/favicon.png' },
        { rel: 'apple-touch-icon', href: '/assets/images/favicon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  pwa,

  devtools: {
    enabled: false,
  },
})
