import Vue from 'vue';
import Router from 'vue-router';
import contentlist from '../components/contentlist/contentlist';
import main from '../View/main.vue';
import theme from '../View/theme.vue';
import detail from '../components/detail/detail';
import author from '../View/author.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/theme/:id',
      name: 'theme',
      component: theme
    },
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    },
    {
      path: '/author',
      name: 'author',
      component: author
    }

  ]
});
