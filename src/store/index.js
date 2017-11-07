import Vue from 'vue';
// 导入vue
import Vuex from 'vuex';
// 导入vuex;
import status from './modules/status';
// 导入status模块（这是我管理全局应用状态的模块
import demo from './modules/demo';
// 导入demo模块（这个的部分演示可以在http://vue2.leenty.com/demo/vuex_state/里看到）
Vue.use(Vuex);
// 告诉vue将要使用vuex
const debug = process.env.NODE_ENV !== 'production';
// env里去获取当前的环境是否需要开启严格模式
// 在发布环境开启严格模式会造成性能上不必要的损失
export default new Vuex.Store({
  // 默认导出vuex模块
    modules: {
    // 导入模块
      status,
      demo
    },
    strict: debug
    // 是否开启严格模式
  });

