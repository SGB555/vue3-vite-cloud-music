import { defineComponent } from 'vue'
interface Props {
  name: string
  color?: string
  size?: string
}

export const Icon = defineComponent<Props>()
