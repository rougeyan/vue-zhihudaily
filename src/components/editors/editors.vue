<template>
  <div class="editors">
      <span class="edit">主编</span>
      <span class="edit eavatar" v-for="(editor,index) in editors" :key="editor.id" :style="{ backgroundImage: 'url(' + replace(editor.avatar) + ')' }">
      </span>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    editors: {}
  },
  methods: {
      //  方法过滤网址
      replace (str) {
          return str.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
      }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
.editors{
    font-size: 0;
    margin: 24px 0;
    .edit{
        display: inline-block;
        overflow: hidden;
        vertical-align: middle;
        font-size: 16px; /*no*/
        margin: 0 20px 0 10px;
        &.eavatar{
            box-sizing: border-box;
            border-radius: 50%;
            width: 75px;
            height: 75px;
            background-size: 100%;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
}
</style>


