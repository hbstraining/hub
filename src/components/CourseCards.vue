<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-layout row wrap>
      <CourseCard
        v-for="course in courses"
        :course="course"
        :key="course['.key']"
      />
    </v-layout>
  </v-container>
</template>

<script>
import CourseCard from './CourseCard';

export default {
  components: {
    CourseCard
  },

  props: {
    courses: {
      required: true,
      type: Array
    }
  }
};
</script>

<style scoped>

</style>
