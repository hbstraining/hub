<template>
  <div class="page-contents">
    <img src="../assets/logo.svg" class="logo">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Welcome to Class'
    };
  },

  computed: {
    classes () {
      return Object.values( this.$store.state.classes );
    }
  }
};
</script>

<style>
.logo {
  margin-top: 2em;
  max-width: 12em;
}
</style>
