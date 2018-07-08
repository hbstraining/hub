import Vue from 'vue';

export default {
  setItem ( state, { item, id, resource }) {
    Vue.set( state[ resource ], id, item );
  }
};
