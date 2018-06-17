// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import firebase from 'firebase';
import App from './App';
import router from './router';

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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
