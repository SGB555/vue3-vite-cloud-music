// components.d.ts

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    RouterLink: typeof import('vue-router')['RouterLink']
    RouterView: typeof import('vue-router')['RouterView']
    Text: typeof import('./components/text/Text')['Text']
    Icon: typeof import('./components/icon/Icon')['Icon']
  }
}

export {}
