<template>
  <div class="main">
    <img src="../assets/logo.svg" class="logo">
    <h2 class="welcome">{{ message }}</h2>

    <CourseCards :courses="courses"></CourseCards>
  </div>
</template>

<script>
import CourseCards from '@/components/CourseCards';

export default {
  data () {
    return {
      message: 'welcome to class.'
    };
  },

  components: {
    CourseCards
  },

  computed: {
    courses () {
      return Object.values( this.$store.state.courses );
    }
  }
};
</script>

<style>
.logo {
  margin-top: 2em;
  max-width: 5em;
}

.welcome {
  margin-bottom: 2em;
}
</style>
