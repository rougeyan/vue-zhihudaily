<template>
    <div class="detailwrap">
        <div>{{$route.params.id}}</div>
        <div class="detail-header">
            <span class="icon iconfont icon-fanhui" @click="returnlist()"></span>
            <span class="icon iconfont icon-fenxiang11"></span>
            <span class="icon iconfont icon-staro"></span>
            <span class="icon iconfont icon-xiaoxi"></span>
            <span class="icon iconfont icon-zan"></span>
        </div>
        <div class="headwrap" :style="{ backgroundImage: 'url(' + replaceUrl(imagess) + ')' }" v-if="imagess">
            <div class="headwrap-title">{{title}}</div>
            <div class="headwrap-mark"></div>
        </div>
        <div class="htmlbody" v-html="htmlbody">
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
let axiosapi = process.env.API_ROOT;
export default {
    name: 'detail',
    data () {
        return {
            responsed: {},
            htmlbody: '',
            title: '',
            imagess: ''
        };
    },
    methods: {
        // 返回列表页面;
        returnlist () {
            // window.history.back();
            // 利用浏览器的前进后退;
            this.$router.go(-1);
        },
        //  过滤网址
        replaceUrl (str) {
            return str.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
        }
    },
    created () {
        // 打包时路径
        // 'http://api.yanzhihao.cc:8080/news-at/api/4/news/before/'
        // 开发环境  /api/4/themes
        // 生产环境  反向代理http://api.yanzhihao.cc:8080/news-at/api/4
        this.$axios.get(axiosapi + '/news/' + this.$route.params.id).then((responsed) => {
            this.responsed = responsed.data;
            console.log(this.responsed);
            this.imagess = this.responsed.image;
            this.title = this.responsed.title;
            // 正则表达式匹配图片
            this.htmlbody = this.replaceUrl(this.responsed.body);
            // console.log(this.listothers);
        });
    },
    destroyed () {
        console.log('detail组件已经销毁组件');
    }
};
</script>

<style lang="scss" rel="stylesheet/scss">
.detailwrap {
    height: 100%;
    width: 100%;
    overflow: auto;
    background: #fff;
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
    .headwrap {
        height: 450px;
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        .headwrap-mark{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-image: -webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.7)),color-stop(40%,rgba(0,0,0,.1)),to(rgba(0,0,0,.1)));
        z-index: 19;
      }
    }

    .headwrap-title.onlyheading {
        margin: 20px 0;
    }
    .headwrap img {
        max-width: 100%;
        vertical-align: top;
    }
    .headwrap-background-link {
        line-height: 2em;
        position: relative;
        display: block;
        padding: 20px 45px 20px 20px !important;
    }
    .headwrap-background .heading {
        color: #999;
        font-size: 15Px!important;
        margin-bottom: 8Px;
        line-height: 1em;
    }
    .headwrap-background .heading-content {
        color: #444;
        font-size: 17Px!important;
        line-height: 1.2em;
    }
    .headwrap-title {
        line-height: 1.2em;
        color: #fff;
        font-size: 22Px;
        margin: 20Px 0 10Px;
        padding: 0 20Px!important;
        font-weight: bold;
        position: absolute;
        bottom: 0;
        z-index: 20;
    }
    .htmlbody {
        overflow: hidden;
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        main,
        nav,
        section,
        summary {
            display: block;
        }
        audio,
        canvas,
        video {
            display: inline-block;
        }
        audio:not([controls]) {
            display: none;
            height: 0;
        }
        html {
            font-family: sans-serif;
            -webkit-text-size-adjust: 100%;
        }
        body {
            font-family: 'Helvetica Neue', Helvetica, Arial, Sans-serif;
            background: #fff;
            padding-top: 0;
            margin: 0;
        }
        a:focus {
            outline: thin dotted;
        }
        a:active,
        a:hover {
            outline: 0;
        }
        h1 {
            margin: .67em 0;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            font-size: 16Px;
        }
        abbr[title] {
            border-bottom: 1Px dotted;
        }
        hr {
            box-sizing: content-box;
            height: 0;
        }
        mark {
            background: #ff0;
            color: #000;
        }
        code,
        kbd,
        pre,
        samp {
            font-family: monospace, serif;
            font-size: 1em;
        }
        pre {
            white-space: pre-wrap;
        }
        q {
            quotes: \201C\201D\2018\2019;
        }
        small {
            font-size: 80%;
        }
        sub,
        sup {
            font-size: 75%;
            line-height: 0;
            position: relative;
            vertical-align: baseline;
        }
        sup {
            top: -0.5em;
        }
        sub {
            bottom: -0.25em;
        }
        img {
            border: 0;
            vertical-align: middle;
            color: transparent;
            font-size: 0;
        }
        svg:not(:root) {
            overflow: hidden;
        }
        figure {
            margin: 0;
        }
        fieldset {
            border: 1Px solid silver;
            margin: 0 2Px;
            padding: .35em .625em .75em;
        }
        legend {
            border: 0;
            padding: 0;
        }
        table {
            border-collapse: collapse;
            border-spacing: 0;
            overflow: hidden;
        }
        a {
            text-decoration: none;
        }
        blockquote {
            border-left: 3Px solid #D0E5F2;
            font-style: normal;
            display: block;
            vertical-align: baseline;
            font-size: 100%;
            margin: .5em 0;
            padding: 0 0 0 1em;
        }
        ul,
        ol {
            padding-left: 20Px;
        }
        .main-wrap {
            max-width: 100%;
            min-width: 300Px;
            margin: 0 auto;
        }
        .content-wrap {
            overflow: hidden;
            background-color: #f9f9f9;
        }
        .content-wrap a {
            word-break: break-all;
        }
        .headline{
            display: none;
        }
        .icon-arrow-right {
            position: absolute;
            top: 50%;
            right: 20Px;
            background-image: url(http://static.daily.zhihu.com/img/share-icons.png);
            background-repeat: no-repeat;
            display: inline-block;
            vertical-align: middle;
            background-position: -70Px -20Px;
            width: 10Px;
            height: 15Px;
            margin-top: -7.5Px;
        }
        .meta {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 16Px;
            color: #b8b8b8;
        }
        .meta .source-icon {
            width: 20Px;
            height: 20Px;
            margin-right: 4Px;
        }
        .meta .time {
            float: right;
            margin-top: 2Px;
        }
        .content {
            color: #444;
            line-height: 1.6em;
            font-size: 17Px;
            margin: 10Px 0 20Px;
        }
        .content img {
            max-width: 100%;
            display: block;
            margin: 30Px auto;
        }

        .content img+img {
            margin-top: 15Px;
        }

        .content img[src*="zhihu.com/equation"] {
            display: inline-block;
            margin: 0 3Px;
        }
        .content a {
            color: #259;
        }
        .content a:hover {
            text-decoration: underline;
        }
        .view-more {
            margin-bottom: 25Px;
            text-align: center;
        }
        .view-more a {
            font-size: 16Px;
            display: inline-block;
            width: 125Px;
            height: 30Px;
            line-height: 30Px;
            background: #f0f0f0;
            color: #B8B8B8;
        }
        .question {
            overflow: hidden;
            padding: 0 20Px!important;
        }
        .question+.question {
            border-top: 5Px solid #f6f6f6;
        }
        .question-title {
            line-height: 1.4em;
            color: #000;
            font-weight: 700;
            font-size: 18Px;
            margin: 20Px 0;
        }
        .meta .author {
            color: #444;
            font-weight: 700;
        }
        .answer+.answer {
            border-top: 2Px solid #f6f6f6;
            padding-top: 20Px;
        }
        .footer {
            text-align: center;
            color: #b8b8b8;
            font-size: 13Px;
            padding: 20Px 0;
        }
        .footer a {
            color: #b8b8b8;
        }
        .question .view-more a {
            width: 100%;
            display: block;
        }
        .hot-comment {
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }
        .comment-label {
            font-size: 16Px;
            color: #333;
            line-height: 1.5em;
            font-weight: 700;
            border-top: 1Px solid #eee;
            border-bottom: 1Px solid #eee;
            margin: 0;
            padding: 9Px 20Px;
        }
        .comment-list {
            margin-bottom: 20Px;
        }
        .comment-item {
            font-size: 15Px;
            color: #666;
            border-bottom: 1Px solid #eee;
            padding: 15Px 20Px;
        }
        .comment-meta {
            position: relative;
            margin-bottom: 10Px;
        }
        .comment-meta .author {
            vertical-align: middle;
            color: #444;
        }
        .comment-meta .vote {
            position: absolute;
            color: #b8b8b8;
            font-size: 12Px;
            right: 0;
        }
        .night .comment-label {
            color: #b8b8b8;
            border-top: 1Px solid #303030;
            border-bottom: 1Px solid #303030;
        }
        .night .comment-item {
            color: #7f7f7f;
            border-bottom: 1Px solid #303030;
        }
        .icon-vote,
        .icon-voted {
            background-repeat: no-repeat;
            display: inline-block;
            vertical-align: 0;
            width: 11Px;
            height: 12Px;
            margin-right: 4Px;
            background-image: url(http://static.daily.zhihu.com/img/app/Comment_Vote.png) !important;
        }
        .icon-voted {
            background-image: url(http://static.daily.zhihu.com/img/app/Comment_Voted.png) !important;
        }
        .night .icon-vote {
            background-image: url(http://static.daily.zhihu.com/img/app/Dark_Comment_Vote.png) !important;
        }
        .img-wrap .headline-title {
            bottom: 5Px;
        }
        .img-wrap .img-source {
            right: 10Px!important;
            font-size: 9Px;
        }
        .global-header {
            position: static;
        }
        .button {
            width: 60Px;
        }
        .button i {
            margin-right: 0;
        }
        .headline .img-place-holder {
            height: 200Px;
        }
        .from-column {
            width: 280Px;
            line-height: 30Px;
            height: 30Px;
            padding-left: 90Px;
            color: #2aacec;
            background-image: url(http://static.daily.zhihu.com/img/News_Column_Entrance.png);
            box-sizing: border-box;
            margin: 0 20Px 20Px;
        }
        .from-column:active {
            background-image: url(http://static.daily.zhihu.com/img/News_Column_Entrance_Highlight.png);
        }
        .night .headline {
            border-bottom: 4Px solid #303030;
        }
        .night img {
            -webkit-mask-image: -webkit-gradient(linear, 0 0, 0 100%, from(rgba(0, 0, 0, 0.7)), to(rgba(0, 0, 0, 0.7)));
        }
        body.night,
        .night .content-wrap {
            background: #343434;
        }
        .night .answer+.answer {
            border-top: 2Px solid #303030;
        }
        .night .question+.question {
            border-top: 4Px solid #303030;
        }
        .night .view-more a {
            background: #292929;
            color: #666;
        }
        .night .icon-arrow-right {
            background-image: url(http://static.daily.zhihu.com/img/share-icons.png);
            background-repeat: no-repeat;
            display: inline-block;
            vertical-align: middle;
            background-position: -70Px -35Px;
            width: 10Px;
            height: 15Px;
        }
        .night blockquote,
        .night sup {
            border-left: 3Px solid #666;
        }
        .night .content a {
            color: #698ebf;
        }
        .night .from-column {
            color: #2b82ac;
            background-image: url(http://static.daily.zhihu.com/img/Dark_News_Column_Entrance.png);
        }
        .night .from-column:active {
            background-image: url(http://static.daily.zhihu.com/img/Dark_News_Column_Entrance_Highlight.png);
        }
        .large .question-title {
            font-size: 24Px;
        }
        .large .meta {
            font-size: 18Px;
        }
        .large .content {
            font-size: 20Px;
        }
        .large blockquote,
        .large sup {
            line-height: 1.6;
        }
        .meta .meta-item {
            -o-text-overflow: ellipsis;
            width: 39%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            display: inline-block;
            color: #929292;
            margin-right: 7Px;
        }
        .headline .meta {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 11Px;
            color: #b8b8b8;
            margin: 15Px 0;
            padding: 0 20Px;
        }
        .headline .meta a,
        .headline .meta a:hover {
            padding-left: 1em;
            margin-top: 2Px;
            float: right;
            font-size: 11Px;
            color: #0066cf;
            text-decoration: none;
        }
        .highlight {
            width: auto;
            overflow: auto;
            word-wrap: normal;
        }
        .highlight::-webkit-scrollbar {
            width: 6Px;
            height: 6Px;
        }
        .highlight code {
            overflow: auto;
        }
        .highlight::-webkit-scrollbar-thumb:horizontal {
            border-radius: 6Px;
            background-color: rgba(0, 0, 0, .5);
        }
        .highlight::-webkit-scrollbar-thumb:horizontal:hover {
            background-color: rgba(0, 0, 0, .6);
        }
        .highlight pre {
            margin: 0;
            white-space: pre;
        }
        .highlight .hll {
            background-color: #ffc;
        }
        .highlight .err {
            color: #a61717;
            background-color: #e3d2d2;
        }
        .highlight .cp {
            color: #999;
            font-weight: 700;
        }
        .highlight .cs {
            color: #999;
            font-weight: 700;
            font-style: italic;
        }
        .highlight .gd {
            color: #000;
            background-color: #fdd;
        }
        .highlight .gi {
            color: #000;
            background-color: #dfd;
        }
        .highlight .gu {
            color: #aaa;
        }
        .highlight .ni {
            color: purple;
        }
        .highlight .nt {
            color: navy;
        }
        .highlight .w {
            color: #bbb;
        }
        .highlight .sr {
            color: olive;
        }
        [hidden],
        .button span {
            display: none;
        }
        b,
        strong,
        .highlight .k,
        .highlight .o,
        .highlight .gs,
        .highlight .kc,
        .highlight .kd,
        .highlight .kn,
        .highlight .kp,
        .highlight .kr,
        .highlight .ow {
            font-weight: 700;
        }
        dfn,
        .highlight .ge {
            font-style: italic;
        }
        .meta span,
        .meta .source {
            vertical-align: middle;
        }
        .meta .avatar,
        .comment-meta .avatar {
            width: 20Px;
            height: 20Px;
            border-radius: 2Px;
            margin-right: 5Px;
        }
        .meta .bio,
        .highlight .gh,
        .highlight .bp {
            color: #999;
        }
        .night .comment-meta .author,
        .night .content,
        .night .meta .author,
        .highlight .go {
            color: #888;
        }
        .night .headline-title,
        .night .headline-background .heading-content,
        .night .question-title {
            color: #B8B8B8;
        }
        .highlight .c,
        .highlight .cm,
        .highlight .c1 {
            color: #998;
            font-style: italic;
        }
        .highlight .gr,
        .highlight .gt {
            color: #a00;
        }
        .highlight .gp,
        .highlight .nn {
            color: #555;
        }
        .highlight .kt,
        .highlight .nc {
            color: #458;
            font-weight: 700;
        }
        .highlight .m,
        .highlight .mf,
        .highlight .mh,
        .highlight .mi,
        .highlight .mo,
        .highlight .il {
            color: #099;
        }
        .highlight .s,
        .highlight .sb,
        .highlight .sc,
        .highlight .sd,
        .highlight .s2,
        .highlight .se,
        .highlight .sh,
        .highlight .si,
        .highlight .sx,
        .highlight .s1,
        .highlight .ss {
            color: #d32;
        }
        .highlight .na,
        .highlight .nb,
        .highlight .no,
        .highlight .nv,
        .highlight .vc,
        .highlight .vg,
        .highlight .vi {
            color: teal;
        }
        .highlight .ne,
        .highlight .nf {
            color: #900;
            font-weight: 700;
        }
        .answer h1,
        .answer h2,
        .answer h3,
        .answer h4,
        .answer h5 {
            font-size: 19Px;
        }
        @media only screen and (-webkit-min-device-pixel-ratio2),
        only screen and (min-device-pixel-ratio2) {
            .icon-arrow-right {
                background-image: url(http://static.daily.zhihu.com/img/share-icons@2x.png);
                -webkit-background-size: 82Px 55Px;
                background-size: 82Px 55Px;
            }
            .icon-vote,
            .icon-voted {
                background-image: url(http://static.daily.zhihu.com/img/app/Comment_Vote@2x.png) !important;
                background-size: 11Px 12Px;
            }
            .icon-voted {
                background-image: url(http://static.daily.zhihu.com/img/app/Comment_Voted@2x.png) !important;
            }
            .night .icon-vote {
                background-image: url(http://static.daily.zhihu.com/img/app/Dark_Comment_Vote@2x.png) !important;
            }
            .from-column {
                background-image: url(http://static.daily.zhihu.com/img/News_Column_Entrance@2x.png) !important;
                background-size: 280Px 30Px;
            }
            .from-column:active {
                background-image: url(http://static.daily.zhihu.com/img/News_Column_Entrance_Highlight@2x.png) !important;
            }
            .night .from-column {
                color: #2b82ac;
                background-image: url(http://static.daily.zhihu.com/img/Dark_News_Column_Entrance@2x.png) !important;
            }
            .night .from-column:active {
                background-image: url(http://static.daily.zhihu.com/img/Dark_News_Column_Entrance_Highlight@2x.png) !important;
            }
        }
        .meta .meta-item {
            width: 39%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            display: inline-block;
            color: #929292;
            margin-right: 7Px;
        }
        .headline .meta {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 11Px;
            color: #b8b8b8;
            margin: 20Px 0;
            padding: 0 20Px;
        }
        .headline .meta a,
        .headline .meta a:hover {
            margin-top: 2Px;
            float: right;
            font-size: 11Px;
            color: #0066cf;
            text-decoration: none;
        }
        .answer h1,
        .answer h2,
        .answer h3,
        .answer h4,
        .answer h5 {
            font-size: 19Px;
        }
        .origin-source,
        a.origin-source:link {
            display: block;
            margin: 25Px 0;
            height: 50Px;
            overflow: hidden;
            background: #f0f0f0;
            color: #888;
            position: relative;
            -webkit-touch-callout: none;
        }
        .origin-source .source-logo,
        a.origin-source:link .source-logo {
            float: left;
            width: 50Px;
            height: 50Px;
            margin-right: 10Px;
        }
        .origin-source .text,
        a.origin-source:link .text {
            line-height: 50Px;
            height: 50Px;
            font-size: 13Px;
        }
        .origin-source.with-link .text {
            color: #333;
        }
        .origin-source.with-link:after {
            display: block;
            position: absolute;
            border-color: transparent transparent transparent #f0f0f0;
            border-width: 7Px;
            border-style: solid;
            height: 0;
            width: 0;
            top: 18Px;
            right: 4Px;
            line-height: 0;
            content: "";
        }
        .origin-source.with-link:before {
            display: block;
            height: 0;
            width: 0;
            position: absolute;
            top: 18Px;
            right: 3Px;
            border-color: transparent transparent transparent #000;
            border-width: 7Px;
            border-style: solid;
            line-height: 0;
            content: "";
        }
        .origin-source-wrap {
            position: relative;
            background: #f0f0f0;
        }
        .origin-source-wrap .focus-link {
            position: absolute;
            right: 0;
            top: 0;
            width: 45Px;
            color: #00a2ed;
            height: 50Px;
            display: none;
            text-align: center;
            font-size: 12Px;
            -webkit-touch-callout: none;
        }
        .origin-source-wrap .focus-link .btn-label {
            text-align: center;
            display: block;
            margin-top: 8Px;
            border-left: solid 1Px #ccc;
            height: 34Px;
            line-height: 34Px;
        }
        .origin-source-wrap.unfocused .focus-link {
            display: block;
        }
        .origin-source-wrap.unfocused .origin-source:before,
        .origin-source-wrap.unfocused .origin-source:after {
            display: none;
        }
        .night .origin-source-wrap {
            background: #292929;
        }
        .night .origin-source-wrap .focus-link {
            color: #116f9e;
        }
        .night .origin-source-wrap .btn-label {
            border-left: solid 1Px #3f3f3f;
        }
        .night .origin-source,
        .night .origin-source.with-link {
            background: #292929;
            color: #666;
        }
        .night .origin-source .text,
        .night .origin-source.with-link .text {
            color: #666;
        }
        .night .origin-source.with-link:after {
            border-color: transparent transparent transparent #292929;
        }
        .night .origin-source.with-link:before {
            border-color: transparent transparent transparent #666;
        }
        /* ==== */
        .question-title {
            color: #494b4d;
        }

        blockquote {
            color: #9da3a6;
            border-left: 3Px solid #Dfe3e6;
        }

        .content a {
            color: #4786b3;
        }

        .content {
            font-size: 17Px;
            color: #616466;
        }

        .content-wrap {
            background: #fff;
        }

        hr {
            margin: 30Px 0;
            border-top-width: 0;
        }


        p {
            margin: 20Px 0 !important;
        }

        .dudu-night .content {
            color: #797b80;
        }

        .dudu-night hr {
            color: #27282b;
            border-color: #27282b;
        }
        .dudu-night .meta .author,
        .dudu-night .meta .bio {
            color: #555659;
        }
        .dudu-night .headline-title,
        .dudu-night .headline-background .heading-content,
        .dudu-night .question-title {
            color: #919499;
        }

        .dudu-night .headline {
            border-bottom: none;
        }
        .dudu-night img {
            -webkit-mask-image: -webkit-gradient(linear, 0 0, 0 100%, from(rgba(0, 0, 0, 0.7)), to(rgba(0, 0, 0, 0.7)));
        }
        body.dudu-night,
        .dudu-night .content-wrap {
            background: #1d1e1f;
        }
        .dudu-night .answer+.answer {
            border-top: 2Px solid #27282b;
        }
        .dudu-night .question+.question {
            border-top: 4Px solid #27282b;
        }
        .dudu-night .view-more a {
            background: #1d1e1f;
            color: #396280;
        }
        .dudu-night .icon-arrow-right {
            background-image: url(http://static.daily.zhihu.com/img/share-icons.png);
            background-repeat: no-repeat;
            display: inline-block;
            vertical-align: middle;
            background-position: -70Px -35Px;
            width: 10Px;
            height: 15Px;
        }
        .dudu-night blockquote,
        .dudu-night sup {
            border-left: 3Px solid #2e3033;
            color: #555659;
        }
        .dudu-night .content a {
            color: #396280;
        }

        .dudu-night img {
            opacity: 0.7;
        }

        .dudu-night .from-column {
            color: #2b82ac;
            background-image: url(http://static.daily.zhihu.com/img/Dark_News_Column_Entrance.png);
        }
        .dudu-night .from-column:active {
            background-image: url(http://static.daily.zhihu.com/img/Dark_News_Column_Entrance_Highlight.png);
        }

        //绂佺敤澶撮儴涓嬮潰鐨勫垎闅旂嚎
        .dudu .headline {
            border-bottom: none;
        }

        .dudu-night .origin-source,
        .dudu-night a.origin-source:link {
            background: #222324;
        }

        .dudu-night .origin-source.with-link .text {
            color: #797b80;
        }
        .dudu-night .origin-source.with-link:after {
            border-color: transparent transparent transparent #797b80;
        }
    }
}
</style>
