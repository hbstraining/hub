<template>
  <div id="app">

    <v-app>

      <!-- hide the offscreen navigation drawer until we need it -->
<!--  <v-navigation-drawer
        v-model="drawer"
        fixed
        app
      >
        <v-list dense>
          <v-list-tile> --> <!-- click here -->
<!--        <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile> -->  <!-- click here -->
<!--        <v-list-tile-action>
              <v-icon>contact_mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Contact</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer> -->

      <v-toolbar dark color="primary">
        <!-- hide the offscreen navigation drawer until we need it -->
<!--    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
        <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
        <!-- hide the search button until we need it -->
        <v-spacer></v-spacer>
        <img src="./assets/logo.svg" class="logo">
<!--    <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn> -->
      </v-toolbar>

      <v-content>
        <v-container fluid>

          <router-view/>

        </v-container>
      </v-content>

      <v-footer app></v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: null,
    title: 'modern web development'
  })
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

.logo {
  max-width: 2em;
}
</style>
