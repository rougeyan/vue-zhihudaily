<template>
    <div class="newswrap">
        <p class="title">{{news.title}}</p>
        <div class="picwrap" v-if="news.images">
            <!-- 因为img地址是一个数据所以取0 -->
            <img v-if="news.images" :src="news.images[0] | urlReplace" alt="">
        </div>
    </div>
    
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    news: {
    }
  },
  // 过滤器 对图片地址进行匹配 过滤改变;
  filters: {
      urlReplace (str) {
          return str.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
      }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
.newswrap{
    display: flex;
    background: #fff;
    border-radius: 10px;
    font-size: 24px; /*no*/
    min-height: 150px;
    border-radius: 10px;
    border: 4px solid #eaeaea;
    border-bottom: 4px solid #d0d0d0;
    font-size: 16px; /*no*/
    padding: 20px 20px 0 20px;
    margin-bottom: 20px;
    .title{
        flex: 1;
        padding: 10px 15px 0 15px;
    }
    .picwrap{
        flex: 0 1 100px;
        height: 100px;
        padding: 10px;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>


