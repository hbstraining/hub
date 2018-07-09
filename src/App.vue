<template>
  <div id="app">

    <v-app>
      <!-- material design toolbar: https://vuetifyjs.com/en/components/toolbars -->
      <v-toolbar color="primary">
        <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
      </v-toolbar>
      <!-- main content area -->
      <v-content>
          <!-- contents from the selected route will be rendered here: https://github.com/vuejs/vue-router -->
          <router-view/>

      </v-content>

    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
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
</style>
