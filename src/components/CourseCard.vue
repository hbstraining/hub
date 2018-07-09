<template>

  <v-card hover>

    <v-card-media
      :src="course.imageUrl"
      height="300"
      :class="{ 'card__media--in-progress': course.isInProgress }"
    ></v-card-media>

    <v-card-title primary-title>
      <h3 class="headline mb-0">{{ course.title }}</h3>
      <div class="description">{{ course.description }}</div>
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
  .card { width: 320px; }
}

.card__media::after {
  content: 'coming soon';
  position: absolute;
  right: -30px;
  top: 20px;
  transform: rotate( 45deg );
  background-color: #3F51B5;
  color: white;
  padding: 0.25em 2em;
}

.card__media--in-progress::after {
  content: 'in progress'
}

.card__title { flex-direction: column; }
.headline { width: 100%; }
.description { width: 100%; }
</style>
