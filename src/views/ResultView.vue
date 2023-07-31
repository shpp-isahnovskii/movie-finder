<script setup>
import { useMovieStore } from '../stores/MovieModule'
import { onBeforeMount, ref, computed } from 'vue'

import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'

import SearchForm from '@/components/SearchForm.vue'
import CarouselMovies from '@/components/CarouselMovies.vue'

const route = useRoute()
const router = useRouter()

const pending = ref(true)

const { fetchMovies } = useMovieStore()

const movieStore = useMovieStore()
const movies = computed(() => movieStore.movies)

onBeforeMount(() => {
  fetchMovies(route.query).finally(() => {
    pending.value = false
  })
})

function onSubmit(name) {
  pending.value = true
  router.push({ name: 'result', query: { s: name } })
  fetchMovies({ s: name }).finally(() => {
    pending.value = false
  })
}
</script>

<template>
  <section>
    <search-form :pending="pending" @submit="onSubmit" />
    <carousel-movies :pending="pending" :movies="movies" />
  </section>
</template>

<style scoped>
section {
  text-align: center;
}
</style>
