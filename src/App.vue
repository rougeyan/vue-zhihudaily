<template>
  <div id="app" class="app">
    <sidebar></sidebar>
    <transition name="fade">
      <div class="appcontent" :class="{'appcontentactive': bothfold}">
          <viewmenu></viewmenu>
            <transition name="slidein">
              <keep-alive exclude="detail">
                <router-view></router-view>
              </keep-alive>
            </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import sidebar from './components/siderbar/sidebar';
import viewmenu from './components/viewmenu/viewmenu';
import contentlist from './components/contentlist/contentlist';
import {mapState} from 'vuex';

export default {
  components: {
    sidebar,
    viewmenu,
    contentlist
  },
  computed: {
    bothfold () {
      // 因为在store中分了模块 所以要state.demo 模块; 否则undefined;
      return this.$store.state.demo.bothfold;
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
.appcontent{
    z-index: 26;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin-bottom: -100px;
    transition: all 0.39s;
    /* 变化状态最终状态*/
    &.appcontentactive{
      transform: scale(.9) translateX(375px);
      box-shadow: 0 0 200px 10px rgba(0,0,0,.3);
      transform-origin: 375px center;
    }
    // 动画效果
    &.fade-enter-active, &.fade-leave-active {
      transition: opacity .5s
    }
    &.fade-enter, &.fade-leave-to{
      opacity: 0
    }
    .btnn{
      position: fixed;
      bottom: 150px;
      font-size: 50px;
      z-index: 60;
      width: 100px;
      height: 100px;
      background: rgba(0,0,0,.3);
    }
}
  
</style>
