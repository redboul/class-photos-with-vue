// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'material-design-lite';
import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import { sync } from 'vuex-router-sync';

import store from './store/index';
import router from './router/index';

import App from './App';

sync(store, router);

Vue.use(Vuex);
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue(Vue.util.extend({
  router,
  store,
}, App)).$mount('#app');

