import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'
import { onMounted, onUnmounted, ref } from 'vue'
BScroll.use(Slide)

export default function useSlider (wrapperRef) {
  const currentPage = ref(0)
  const slide = ref(null)
  onMounted(() => {
    slide.value = new BScroll(wrapperRef.value, {
      scrollX: true,
      scrollY: false,
      slide: true,
      momentum: false,
      bounce: false,
      probeType: 2
    })
    // 绑定事件
    slide.value.on('slideWillChange', (page) => {
      currentPage.value = page.pageX
    })
  })
  // 卸载
  onUnmounted(() => {
    slide.value.destroy()
  })
  return {
    currentPage,
    slide
  }
}
