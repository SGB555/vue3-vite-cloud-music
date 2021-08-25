import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import StyleImport from 'vite-plugin-style-import'
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    StyleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`
          }
        }
      ]
    }),
    ViteComponents({
      customComponentResolvers: [AntDesignVueResolver()]
    })
  ],
  server: {
    port: 3001
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
