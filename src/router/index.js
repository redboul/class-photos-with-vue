import Vue from 'vue';
import Router from 'vue-router';

import ListPhotos from '../components/ListPhotos';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: ListPhotos },
  ],
});
