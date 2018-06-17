// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import firebase from 'firebase';
import App from './App';
import router from './router';
import 'babel-polyfill';

import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.config.productionTip = false;

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCyyOELPrj_pbf8xANzXNOj_dHUF2Nnd08',
  authDomain: 'hbs-training-hub.firebaseapp.com',
  databaseURL: 'https://hbs-training-hub.firebaseio.com',
  projectId: 'hbs-training-hub',
  storageBucket: '',
  messagingSenderId: '771856227909'
};

firebase.initializeApp( config );

Vue.use( Vuetify );

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
