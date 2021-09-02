import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Text from '@/components/text/Text.vue'
import Icon from '@/components/icon/icon.vue'
import './styles/index.scss'

const app = createApp(App)
app.component('Text', Text)
app.component('Icon', Icon)

app.use(router).mount('#app')
