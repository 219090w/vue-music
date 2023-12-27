<template>
<!-- 封装滚动组件 -->
  <div ref="rootRef">
    <slot></slot>
  </div>
</template>

<script>
import { ref } from 'vue'
import useScroll from './useScroll.js'
export default {
  name: 'Scroll',
  props: {
    // 设置默认值
    click: {
      default: true,
      type: Boolean
    }
  },
  setup (props) {
    const rootRef = ref(null)
    const scroll = useScroll(rootRef, props)
    return {
      rootRef,
      scroll
    }
  }
}
</script>

<style>

</style>
