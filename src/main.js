// the Vue build version to load with the `import` command
// ( runtime-only or standalone ) has been set in webpack.base.conf with an alias
import Vue from 'vue';
import App from './App';
import router from './router';
import store from '@/store';
import 'babel-polyfill';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import 'material-design-icons-iconfont/dist/material-design-icons.css';

// instructs Vue to use the Vuetify plugin
Vue.use( Vuetify );

// turn off annoying Vue development/production console warning
Vue.config.productionTip = false;

// initialize the Vue instance with our client-side router and the base App component
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  store,
  components: { App },

  beforeCreate () {
    store.dispatch( 'fetchAllClasses' );
  }
});
