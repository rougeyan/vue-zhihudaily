<template>
    <div class="menuwarp">
        <div class="menu">
            <span class="icon" @click="showthemelist()">theme</span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    methods: {
        showthemelist () {
        // 执行显式提交 函数;
        this.$store.commit('IF_BOTH_FOLD');
        }
    }
};
</script>

<style lang="scss" rel="stylesheet/scss">
.menuwarp{
    width: 100%;
    position: fixed;
    bottom: 0;
    // 不知道为什么有一条线
    // 用margin-botton 掩盖一下;
    margin-bottom: -10px;
    z-index: 33;
    color: #fff;
    .menu{
        width: 100%; 
        height: 125px;
        background: #1abc9c;
        display: flex;
        .icon{
            flex: 1;
            text-align: center;
            line-height: 125px;
            font-size: 40px /*no*/
        }
    }

}
</style>