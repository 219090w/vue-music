// 自定义v-loading指令，实现将loading组件动态添加到绑定的el组件中
import { createApp } from 'vue'
import Loading from './Loading.vue'
import { addClassName, removeClassName } from '@/assets/js/dom'
const className = 'g-relative'
export const loadingDirective = {
  mounted (el, binding) {
    // 创建对象，将Loading组件做为根组件
    const app = createApp(Loading)
    // 获取实例,将这个实例挂载到动态创建的div元素上
    const instance = app.mount(document.createElement('div'))
    el.instance = instance
    // 使用动态参数设置指令内容
    const title = binding.arg
    if (typeof title !== 'undefined') {
      instance.setTitle(title)
    }
    // 挂载
    if (binding.value) {
      // debugger
      append(el)
    }
  },
  // 当组件数据发送变化时
  updated (el, binding) {
    const title = binding.arg
    if (typeof title !== 'undefined') {
      el.instance.setTitle(title)
    }
    if (binding.value !== binding.oldValue) {
      binding.value ? append(el) : remove(el)
    }
  }
}
// 挂载元素
function append (el) {
  // 判断el样式是否定位
  const style = getComputedStyle(el)
  // debugger
  if (['relative', 'fixed', 'abstolate'].indexOf(style) === -1) {
    addClassName(el, className)
  }
  el.appendChild(el.instance.$el)
}

function remove (el) {
  removeClassName(el, className)
  el.removeChild(el.instance.$el)
}
