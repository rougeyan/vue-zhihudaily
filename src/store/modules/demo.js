import * as types from '../types';
// 导入mutations的命名空间

// 定义state状态;
const state = {
  // 定义state
    bothfold: false,
    // 折叠状态 false 表示没有折叠;
    headtitle: '',
    // GET_CONTENTLIST_SCROLTOP
    contentlistscroltop: ''
  };
// 派生状态;
const getters = {
  // 定义getters, getters是对state的扩展，可以以state衍生出其他状态
    bothfoldStatus: state => state.bothfold ? '已折叠' : '未折叠'
  };
// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
// 在这里是定义, 在组件中使用;
// 模式 [ type ] - (state, 提交载荷（Payload）) - { handler(回调函数) };
// type就是 命名空间;  时间类型 - 指的是某件事;
// state 就是状态;    传入状态  载荷指的是在组件中加入的 额外参数;
// this.$store.commit('xxx', abcd, cd);
// mutations ={ [types.ARTICLE_LIST] (state , {最好为一个对象payload} ,b ) {  };
// 例子
// mutations: {
//   increment (state, payload) {
//     state.count += payload.amount
//   }
// }
// store.commit('increment', {
//   amount: 10
// })
// handler 就是回调函数   根据状态发生改变?
// mutations 必须是同步函数;
const mutations = {
  [types.IF_BOTH_FOLD] (state) {
    state.bothfold = !state.bothfold;
  },
  [types.GET_HEAD_TITLE] (state, payload) {
    if (payload + 1) {
      state.headtitle = payload.title;
    } else if (!payload) {
      state.headtitle = '首页';
    }
  }
};

export default {
  // 导出整个demo模块
    state,
    getters,
    mutations
};

