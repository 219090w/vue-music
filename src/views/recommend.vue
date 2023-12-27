<template>
  <div class="recommend" v-loading:[lodingTitle]="loading">
<!-- 滚动内容 -->
  <scroll class="wrapper">
    <div>
    <!-- 轮播图 -->
  <div class="slider-wrapper">
    <div class="slider-content">
      <slider v-if="sliderData.length" :slider="sliderData"></slider>
    </div>
  </div>
  <!-- 歌单列表 -->
  <div class="recommend_list">
    <div class="title" v-show="!loading">热门歌单推荐</div>
    <ul>
      <li v-for="item in albums" :key="item.id" class="list">
        <div class="icon">
          <img v-lazy="item.pic" alt="" width="60px" height="60px">
        </div>
        <div class="text">
          <h2 class="name">{{item.username}}</h2>
          <p class="tit">{{item.title}}</p>
        </div>
      </li>
    </ul>
  </div>
    </div>
  </scroll>
  </div>
</template>

<script>
import Slider from '@/components/base/slider/Slider.vue'
import Scroll from '@/components/base/scroll/Scroll.vue'
import { getRecommend } from '@/service/recommend.js'
export default {
  name: 'Recommend',
  components: { Slider, Scroll },
  data () {
    return {
      sliderData: [],
      albums: [],
      lodingTitle: '正在加载...'
    }
  },
  computed: {
    loading () {
      return !this.sliderData.length && !this.albums.length
    }
  },
  async created () {
    const res = await getRecommend()
    console.log(res)
    this.sliderData = res.sliders
    this.albums = res.albums
  }
}
</script>

<style lang="scss" scoped>
.recommend{
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;

.wrapper{
  height: 100%;
  overflow: hidden;
  .slider-wrapper{
    position: relative;
        width: 100%;
        height: 0;
        padding-top: 40%;
        overflow: hidden;
    .slider-content{
      position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
    }
  }
.recommend_list{
  .title{
    height: 65px;
    line-height: 65px;
    text-align: center;
    font-size: $font-size-medium;
    color: $color-theme;
  }
  ul .list{
    display: flex;
    align-items: center;
    box-sizing: border-box;
    // justify-content: space-between;
    padding: 0 20px 20px 20px;
    .icon{
      flex: 0 0 60px;
      width: 60px;
      padding-right: 20px;
    }
    .text{
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      line-height: 20px;
      overflow: hidden;
      font-size: $font-size-medium;
      .name{
        margin-bottom:10px ;
        color: $color-text;
      }
      .tit{
        color: $color-text-d;
      }
    }
  }
}
}
}

</style>
