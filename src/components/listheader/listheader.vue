<template>
    <div class="headwrap">
        <div class="header">
            <span class="title">{{title}}</span>
            <span class="mes iconfont icon-chidouren-copy"></span>
            <span class="more iconfont icon-dian"></span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default{
    computed: {
        title () {
            return this.$store.state.demo.headtitle;
        }
    }
};
</script>

<style lang="scss" rel="stylesheet/scss">
.headwrap{
    width: 100%;
    .header{
    display: flex;
    top:0;
    left: 0;
    width: 100%;
    height: 100px;
    font-size: 0;
    background: #1abc9c;
    color: #fff;
    z-index: 50;
    line-height: 100px;
    .listgo{
        flex: 1;
        font-size: 60px;
        padding-left: 25px;
        padding-right: 25px;
    }
    .title{
        flex: 27;
        font-size: 40px;
    }
    .mes{
        flex: 1;
        font-size: 60px;
        padding-right: 25px;
    }
    .more{
        flex: 1;
        font-size: 60px;
        padding-right: 25px;
    }
}
}
</style>


