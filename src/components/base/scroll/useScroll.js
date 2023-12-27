import BScoll from '@better-scroll/core'
// observeDom 能够自动刷新，重新Referch，获取元素高度
import ObserveDOM from '@better-scroll/observe-dom'
import { onMounted, ref, onUnmounted } from 'vue'
BScoll.use(ObserveDOM)
export default function useBetter (ScrollDom, option) {
  const scroll = ref(null)
  onMounted(() => {
    console.log(ScrollDom.value)
    scroll.value = new BScoll(ScrollDom.value, {
      ...option,
      observeDOM: true
    })
  })
  onUnmounted(() => {
    scroll.value.destory()
  })
  return scroll
}
