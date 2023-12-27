import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lazyPlugin from 'vue3-lazy'
import '@/assets//scss/index.scss'
// 全局注册自定义指令
import { loadingDirective } from './components/base/loading/derective'
createApp(App).use(store).use(router).use(lazyPlugin, {
  loading: require('./assets/images/default.png')
}).directive('loading', loadingDirective).mount('#app')
