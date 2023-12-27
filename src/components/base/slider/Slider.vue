<template>
<div class="slide-banner">
    <div class="banner-wrapper">
      <!-- 图片 -->
      <div class="slide-banner-wrapper" ref="wrapperRef">
        <div class="slide-banner-content">
          <div v-for="item in slider" :key="item.id" class="slide-page">
            <a :href="item.link">
              <img :src="item.pic" alt="">
            </a>
          </div>
        </div>
      </div>
      <!-- 圆点 -->
      <div class="dots-wrapper">
        <span
          class="dot"
          v-for="(item,index) in slider"
          :key="item.id"
          :class="{'active': currentPage === index}"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import useSilder from './useSlider.js'
export default {
  name: 'Slider',
  props: {
    slider: {
      type: Array,
      default () {
        return []
      }
    }
  },
  setup () {
    const wrapperRef = ref(null)
    // 自定义Hook函数
    const { currentPage } = useSilder(wrapperRef)
    return {
      wrapperRef,
      currentPage
    }
  }
}
</script>

<style lang="scss" scoped>
.slide-banner{
.banner-wrapper{
  position: relative;
    .slide-banner-wrapper{
      min-height: 1px;
      overflow: hidden;
      .slide-banner-content{
        white-space: nowrap;
        font-size: 0;
        .slide-page{
          display: inline-block;
          width: 100%;
          a,img{
          display: block;
          width: 100%;
        }
        }

      }
    }
  .dots-wrapper{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 12px;
      line-height: 12px;
    .dot{
      display: inline-block;
      width: 8px;
      height: 8px;
      margin: 0 4px;
      border-radius: 50%;
      background:$color-text-l;
      transform: translateZ(1px);
      &.active{
        width: 20px;
        border-radius: 5px;
        background: $color-text-ll;
      }
    }
  }
}
}

</style>
