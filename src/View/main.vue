<template>
    <div class="mainwrap" v-cloak id="mainwrapp" ref="mainwrap">
        <!-- <div v-if="$route.params.id">这个$route.params.id是{{$route.params.id}}</div>
        <div v-if="!$route.params.id">这个是首页没有$route.params.id</div> -->
        <!-- 轮播图 或 首页图片显示 -->
        <div class="content" ref="content">
            <banner :newdata="newdata"></banner>
            <!-- contenlist 都是以 -->
            <div class="detaillist">
                <!-- 最新或第一次或 -->
                <ul v-if="newdata.stories">
                    <li v-if="newdata.top_stories" class="today">今日热闻</li>
                    <li v-for="news in newdata.stories" :key="news.id">
                        <router-link :to="'/detail/'+ news.id">
                            <detailnews :news="news"></detailnews>
                        </router-link>
                    </li>
                </ul>
                <!-- 无滚动限加载 -->
                <div v-if="!$route.params.id">
                <ul v-for="day in storiesday" :key="day.id">
                    <li class="today">{{day.date}}</li>
                    <li v-for="news in day.stories" :key="news.id">
                        <router-link :to="'/detail/'+ news.id">
                            <detailnews :news="news"></detailnews>
                        </router-link>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
// import contentdetail from '../contentdetail';
import banner from '../components/banner/banner';
let axiosapi = process.env.API_ROOT;
import detailnews from '../components/detailnews/detailnews';
export default {
    components: {
        banner,
        detailnews
    },
    data () {
        return {
            // 对象newdata定义获取列表数据;
            newdata: {},
            // 无限滚动的对象数组;
            storiesday: []
        };
    },
    created () {
        // 创建组件时获取访问并获取数据
        // 因为更新的时候每次都会created组件,
        // 根据id来刷新选择载入的页面;
        // 调用
        this.whataxios();
    },
    mounted () {
        // 请求开关;
        let sw = true;
        // 根据请求次数,日期递减;
        let times = 0;
        // 日期格式 20171001;
        let dataaa = '';
        // 获取今天日期; 暂时有小bug 只能无限加载一个月 应该根据请求次数改变;
        // 返回日期函数;
        let getdata = function () {
            console.log('times是    ' + times);
            let date = new Date();
            let seperator1 = '-';
            let seperator2 = ':';
            let month = date.getMonth() + 1;
            let strDate = date.getDate();
            // 根据请求次数作差
            // 小于0 的情况;
            if ((strDate - times) < 0) {
                // 当前日期小于次数 就要变月份
                month = date.getMonth();
                 // 30天的月份;
                if (month === 4 || month === 6 || month === 9 || month === 11) {
                    strDate = 31 - times + strDate;
                    if (month >= 1 && month <= 9) {
                        month = '0' + month;
                    }
                    if (strDate >= 0 && strDate <= 9) {
                            strDate = '0' + strDate;
                    }
                    month = month.toString();
                    strDate = strDate.toString();
                    dataaa = date.getFullYear() + month + strDate;
                    }
                // 31天的月份
                if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
                    strDate = 32 - times + strDate;
                    if (month >= 1 && month <= 9) {
                        month = '0' + month;
                    }
                    if (strDate >= 0 && strDate <= 9) {
                            strDate = '0' + strDate;
                    }
                    month = month.toString();
                    strDate = strDate.toString();
                    dataaa = date.getFullYear() + month + strDate;
                }
            } else if (strDate - times >= 0) {
                if (month >= 1 && month <= 9) {
                    month = '0' + month;
                }
                if (strDate >= 0 && strDate <= 9) {
                    strDate = '0' + strDate;
                }
                month = month.toString();
                strDate = strDate.toString();
                dataaa = date.getFullYear() + month + strDate - times + 1;
            }
            return dataaa;
        };
        // 监听滚动条
        // 之前是windows窗口 addEventlistener
        // 大概监听的方法是
        /* 对象窗口.addEventListener('scroll', () => {
            外层对象窗口例如 windows  / (document.getElementById('mainwrapp') )
                document.getElementById('mainwrapp').scrolltop
                                        +
                (不变)windwos.innerHeight  可是窗口
                                        >=
                             滚动内容的clientHeight
           if (对象窗口外层).scrollTop + window.innerHeight >= this.$refs.content.clientHeight) {
        }
        */
        document.getElementById('mainwrapp').addEventListener('scroll', () => {
                // console.log('得到了窗口');
                // console.log(document.getElementById('mainwrapp').scrollTop);
                // console.log(window.innerHeight);
                // console.log(this.$refs.content.clientHeight);
            // 有一个DTD的坑 (暂不了解,先记)
            // document.body 无限滚动:PC端可以移动端不行;
            // document.documentElement.scrollTop更改之后;
            // [document.body.scrollTop与document.documentElement.scrollTop兼容](http://blog.csdn.net/lploveme/article/details/7011174)
            // 这里就可以的通用;
            // this.$route.params.id <= 100 && this.$route.params.id >= 0
            if (document.getElementById('mainwrapp').scrollTop + window.innerHeight >= this.$refs.content.clientHeight) {
                // 判断开关
                if (sw === true) {
                    // 执行时候开关关闭
                    sw = false;
                    times += 1;
                    console.log(times);
                    let newurl = axiosapi + '/news/before/' + getdata();
                    console.log(newurl);
                    this.$axios.get(newurl).then((responsed) => {
                        // 这里this.storiesday 已经在data中定义?
                        this.storiesday.push(responsed.data);
                        // 把开关放在回调函数中;
                        // 防止短时间内多次触发;
                        // 数据已经获取,更新DOM未更新,只有在DOM渲染之后才打开开完; ;
                        this.$nextTick(() => {
                            sw = true;
                        });
                        // 不一定用nextTick 或者 sw = true 都可以
                        // sw = true
                    });
                }
            }
        });
    },
    methods: {
        // 抽象请求方法
        useaxios (address) {
            this.$axios.get(address).then((responsed) => {
                this.newdata = responsed.data;
            });
        },
        // 根据ID选择载入数据;
        whataxios () {
            if (!this.$route.params.id) {
                this.useaxios(axiosapi + '/news/latest');
                console.log('首页');
            }
        }
    }
};
</script>

<style lang="scss" rel="stylesheet/scss">
.mainwrap{
    background: #efefef;
    overflow: auto;
    height: 92%;
    .content{
        .detaillist{
            padding: 0 25px;
            .today {
                font-size: 24px; /*no*/
                margin: 37.5px auto;
            }
        }
    }
}
</style>