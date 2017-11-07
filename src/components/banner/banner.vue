<template>
    <div class="banner">
    <!-- 首页 滚动-->
        <carrousell v-if="newdata.top_stories" :newdata="newdata"></carrousell>
    <!-- else页面 -->
        <div v-if="newdata.background" class="hotwrap" :style="{ backgroundImage: 'url(' + replace(newdata.background) + ')' }">
            <h1 class="title">{{newdata.description}}</h1>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import carrousell from '../carrousel/carrousell';

export default {
    components: {
        carrousell
    },
    props: {
        newdata: {
            type: Object
        }
    },
    methods: {
        //  过滤网址
        replace (str) {
            return str.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
        }
    }
};
</script>

<style lang="scss" rel="stylesheet/scss">
    .banner{
        width: 100%;
        height: 6rem;
        overflow: hidden;
        .hotwrap{
            width: 100%;
            height: 100%;
            font-size: 0;
            background-size: 100%;
            background-position: center;
            background-repeat: no-repeat;
            position: relative;
            .title{
                position: absolute;
                bottom: 0;
                font-size: 40px;
                color: #fff;
                font-weight: 700;
                margin: 0 37.5px;
            }
        }
    }
</style>


