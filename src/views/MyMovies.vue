<script setup>
import CarouselMovies from '@/components/CarouselMovies.vue'
import { useMovieStore } from '../stores/MovieModule'
import { computed } from 'vue'

import NewMovieForm from '@/components/NewMovieForm.vue'

const movieStore = useMovieStore()
const myMovies = computed(() => movieStore.myMovies)

</script>

<template>
  <section>
    <carousel-movies
      class="section-item"
      v-if="myMovies.length !== 0"
      :myMovies="true"
      :movies="myMovies"
    />
    <div class="empty-list_info section-item" v-else>Your movies list is empty</div>
    <NewMovieForm />
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section-item {
  margin-top: 60px;
}
.empty-list_info {
  margin-bottom: 10px;
}
</style>
