// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

// axios 变为私有才能使用;
import axios from 'axios';
Vue.prototype.$axios = axios;

// 使用swiper, 需要引入并且使用;
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);

// 引入flexible
import flexible from 'amfe-flexible';
// 引入通用css模块入口;;
import './common/css/index.scss';

// 引入store Vue.store; 并且在实例中注入;
import store from './store';

Vue.config.productionTip = false;
// // 全局过滤器
// Vue.prototype.replaceUrl = (srcUrl) => {
//    // consoloe.是因为srcUrl 是移步的, undefinde,因此replace undefinde;
//   console.log(srcUrl);
//   return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
// };

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store要注入到new Vue 中; 必须的;
  store,
  template: '<App/>',
  components: { App }
});
