<template>

  <v-card hover>

    <v-card-media
      :src="course.imageUrl"
      height="300"
    ></v-card-media>

    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ course.title }}</h3>
        <div>{{ course.description }}</div>
      </div>
    </v-card-title>
  </v-card>

</template>

<script>
export default {
  props: {
    course: {
      required: true,
      type: Object
    }
  }
};
</script>

<style scoped>
.card {
  width: 600px;
  min-width: 320px;
  margin: 1em;
}

@media all and ( min-width: 704px ) {
  .card {
    width: 320px;
  }
}
</style>
