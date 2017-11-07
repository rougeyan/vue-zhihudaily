<template>
  <div class="detail-header">
    <span class="icon iconfont icon-fanhui" @click="returnlist()"></span>
    <span class="icon iconfont icon-fenxiang11"></span>
    <span class="icon iconfont icon-staro"></span>
    <span class="icon iconfont icon-xiaoxi"></span>
    <span class="icon iconfont icon-zan"></span>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  methods: {
    // 返回列表页面;
    returnlist () {
        // window.history.back();
        // 利用浏览器的前进后退;
        this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
.detail-header {
    display: flex;
    width: 100%;
    height: 100px;
    font-size: 0;
    background: #00a2ea;
    color: #fff;
    z-index: 50;
    .icon {
        flex: 1;
        line-height: 100px;
        font-size: 24px;/*no*/
        text-align: center;
    }
}
</style>
