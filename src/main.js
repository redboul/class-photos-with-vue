// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import { sync } from 'vuex-router-sync';
import Vuetify from 'vuetify';
import store from './store/index';
import router from './router/index';

import App from './App';

sync(store, router);

Vue.use(VueResource);
Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue(Vue.util.extend({
  router,
  store,
}, App)).$mount('#app');

