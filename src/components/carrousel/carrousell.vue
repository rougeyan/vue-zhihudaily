/** 具体详情查看下面网址
 **
 ** - http://www.swiper.com.cn/api/index.html */
<!-- The ref attr used to find the swiper instance -->
<template>
  <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(item,index) in newdata.top_stories" :key="item.id" :style="{ backgroundImage: 'url(' + replace(item.image) + ')' }">
      <router-link :to="'/detail/'+item.id">
      <div class="swiper-mark"></div>
      <h1 class="title">{{item.title}}</h1>
      </router-link>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination">pagination</div>
    <!-- <div class="swiper-button-prev" slot="button-prev">pb</div>
    <div class="swiper-button-next" slot="button-next">nextb</div> -->
    <div class="swiper-scrollbar"   slot="scrollbar">scrollbar</div>
  </swiper>
</template>

<script>
  // swiper options example:
  export default {
    props: {
      newdata: {
        type: Object
      }
    },
    data () {
      return {
        // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which mk mmeans you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        swiperOption: {
          // swiper optionss 所有的配置同swiper官方api配置
          autoplayDisableOnInteraction: false,
          initialSlide: 1,
          autoplay: 3000,
          loop: true,
          direction: 'horizontal',
          setWrapperSize: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          scrollbar: '.swiper-scrollbar',
          mousewheelControl: true,
          observeParents: true,
          // if you need use plugins in the swiper, you can config in here like this
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          onTransitionStart (swiper) {
            // console.log(swiper);
          }
          // more Swiper configs and callbacks...
          // ...
        }
      };
    },
    methods: {
        //  过滤网址
      replace (str) {
            return str.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
        }
    },
    // you can find current swiper instance object like this, while the notNextTick property value must be true
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper;
      }
    },
    created () {
      // console.log('获取的newtdata是' + this.newdata);
      // console.log(this.newdata);
    },
    mounted () {
      // you can use current swiper instance object to do something(swiper methods)
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log('this is current swiper instance object', this.swiper);
      // this.swiper.slideTo(1, 2000, false);
    }
  };
</script>
<style lang="scss" rel="stylesheet/scss">
.swiper-container{
  background: pink;
  width: 100%;
  height: 100%;
  position: relative;
  .swiper-wrapper{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    .swiper-slide{
      flex: 1;
      box-sizing: border-box;
      border: 2px solid #000;
      color:#fff;
      text-align: center;
      line-height: 33.33vh;
      background-size: 100%;
      background-position: center;
      background-repeat: no-repeat;
      position: relative;
      .swiper-mark{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-image: -webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.7)),color-stop(40%,rgba(0,0,0,.1)),to(rgba(0,0,0,.1)));
      }
      .title{
        position: absolute;
        bottom: 40px;
        line-height: 1.2;
        left: 0;
        padding: 0 .48rem;
        font-weight: 300;
        font-size: .48rem;
        color: #fff;
      }
    }
  }
  .swiper-pagination{
    position: absolute;
    bottom: 10px;
    display: flex;
    margin-left: 295px;
    .swiper-pagination-bullet{
      flex: 1;
      width: 24px;
      height: 24px;
      margin-right: 10px;
      background: rgba(90, 90, 90, 0.6);
      border-radius: 50%;
      &:last-child{
        margin-right: 0;
      }
      &.swiper-pagination-bullet-active{
        background: #fff;
      }
    }
  }
}
</style>