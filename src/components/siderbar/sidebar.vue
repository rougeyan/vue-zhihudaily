<template>
    <!-- @touchmove.prevent 弹出层也禁止滚动了 -->
    <div class="sidewrap" v-show="showsidebar()">
        <div class="sidelist">
            <ul>
                <li class="itemlist" @click="hidesidebar()">
                    <transition name="ta-rin">
                        <router-link to="/">
                            <div class="theme">
                                <span class="name">首页</span>
                            </div>
                        </router-link>
                    </transition>
                    </li>
                <li v-for="item in themelists" :key="item.id" class="itemlist" @click="hidesidebar(),gettheme(item)">
                    <transition name="slide">
                        <router-link :to="'/theme/' + item.id">
                            <div class="theme">
                                <span class="name">{{item.name}}</span>
                            </div>
                        </router-link>
                    </transition>
                </li>
            </ul>
        </div>
        <router-link :to="'/author'">
            <div class="author" @click="hidesidebar ()">about author
            </div>
        </router-link>
    </div>
</template>

<script type="text/ecmascript-6">
    // 根据开发环境不同而引入;
    let axiosapi = process.env.API_ROOT;
    export default {
        data () {
            return {
                // 主题列表
                themelists: []
            };
        },
        created () {
            // 主题URL
            // URL: https://news-at.zhihu.com/api/4/themes
            // 开发环境  /api/4/themes
            // 生产环境  反向代理http://api.yanzhihao.cc:8080/news-at/api/4
            this.$axios.get(axiosapi + '/themes').then((responsed) => {
                this.responsed = responsed.data;
                this.themelists = this.responsed.others;
            });
        },
        methods: {
            // 显示函数;
            showsidebar () {
                if (this.fold) {
                    return false;
                } else {
                    document.body.style.overflow = 'hidden';
                    return true;
                }
            },
            // 隐藏;
            hidesidebar () {
                this.$store.commit('IF_BOTH_FOLD');
            },
            // 获取点击的标题
            gettheme (item) {
                this.$store.commit('GET_HEAD_TITLE', {
                    title: item.name});
            }
        }
    };

</script>

<style lang="scss" rel="stylesheet/scss">
.sidewrap{
    z-index: 25;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #1abc9c;
    width: 100%;
    height: 100%;
    .sidelist{
        background-color: hsla(0,0%,100%,.1);
        color: #fff;
        margin-top: 150px;
        width: 5.5rem;
        height: 10rem;
        overflow: auto;
        .itemlist{
            padding: 20px 0;
            margin: 0 0 0 50px;
            border-bottom: 3px solid #fff;
            .theme{
                color: #fff;
                span{
                    font-size: 20px;/*no*/
                }
            }
        }
    }
    .author {
        margin: 30px 0 0 50px;;
        border-radius: 10px;
        border: 4px solid #fff;
        width: 300px;
        height: 150px;
        color: #fff;
        font-size: 32px; /*no*/
        text-align: center;
        font-weight: 700;
    }
}
</style>
