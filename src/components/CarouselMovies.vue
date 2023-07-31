<script setup>
import { useRouter } from 'vue-router'
import { ref, defineProps } from 'vue'

import PageLoader from '@/components/PageLoader.vue'


const props = defineProps(['pending', 'movies', 'myMovies'])

const currentIndex = ref(0)
function onCarouselChange(event) {
  currentIndex.value = event
}

const router = useRouter()
function showDetails() {
  router.push({ name: 'details', query: { i: props.movies[currentIndex.value].imdbID } })
}
</script>

<template>
  <div v-if="!pending" class="movie-carousel">
    <el-carousel :interval="4000" type="card" @change="onCarouselChange">
      <el-carousel-item v-for="movie in movies" :key="movie.imdbID">
        <img :src="movie.Poster" alt="movie poster" />
      </el-carousel-item>
    </el-carousel>
    <div class="movie__comment">
      <div>Title: {{ movies[currentIndex].Title }}</div>
      <div>Year: {{ movies[currentIndex].Year }}</div>
      <el-button v-if="!myMovies" type="primary" @click="showDetails">Show details</el-button>
    </div>
  </div>
  <div v-else class="movie-carousel_loader">
    <page-loader />
  </div>
</template>

<style scoped>
.el-carousel {
  width: 600px;
}
.movie-carousel_loader {
  display: flex;
  justify-content: center;
}
.el-carousel__item {
  width: 300px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
:deep(.el-carousel__indicators) {
  display: none;
}
.movie-carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.movie__comment {
  margin-top: 0.5rem;
}

@media screen and (min-width: 768px) {
  .el-carousel {
    width: 600px;
  }
}
</style>
