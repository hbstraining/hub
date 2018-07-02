<template>
  <div id="app">

    <v-app>
      <!-- material design toolbar at the top of the page -->
      <v-toolbar dark color="primary">
        <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
      </v-toolbar>
      <!-- main content area -->
      <v-content>
        <v-container fluid>
          <!-- contents from the selected route will be rendered here -->
          <router-view/>

        </v-container>
      </v-content>
      <!-- material design footer -->
      <v-footer app></v-footer>
    </v-app>
  </div>
</template>

<script>
import db from './database/db';

export default {
  name: 'App',

  data: () => ({
    title: 'modern web development'
  }),

  firebase: {
    classes: db.collection( 'classes' )
      .onSnapshot( querySnapshot => {
        querySnapshot.forEach( doc => {
          console.log( `${doc.id} => ${doc.data().description}` );
        });
      })
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
