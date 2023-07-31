<script setup>
import { useMovieStore } from '../stores/MovieModule'
import { onBeforeMount, computed, ref } from 'vue'
import { useRoute } from 'vue-router'

import PageLoader from '@/components/PageLoader.vue'

const pending = ref(true)

const movieStore = useMovieStore()
const movieData = computed(() => movieStore.selectedMovie)

const route = useRoute()
const { movieDetails } = useMovieStore()
onBeforeMount(() => {
  movieDetails(route.query).finally(() => {
    pending.value = false
  })
})
</script>

<template>
  <div v-if="!pending">
    <h1 class="movie-title">{{ movieData.Title }}</h1>
    <div class="movie-details">
      <div class="movie-poster">
        <img :src="movieData.Poster" alt="Movie Poster" />
      </div>
      <div class="movie-info">
        <p>Year: {{ movieData.Year }}</p>
        <p>Rated: {{ movieData.Rated }}</p>
        <p>Released: {{ movieData.Released }}</p>
        <p>Genre: {{ movieData.Genre }}</p>
        <p>Director: {{ movieData.Director }}</p>
        <p>Plot: {{ movieData.Plot }}</p>
        <p>Language: {{ movieData.Language }}</p>
        <p>Country: {{ movieData.Country }}</p>
        <p>Awards: {{ movieData.Awards }}</p>
        <p>IMDb Rating: {{ movieData.imdbRating }}</p>
        <p>Metascore: {{ movieData.Metascore }}</p>
        <div class="ratings">
          <p v-for="rating in movieData.Ratings" :key="rating.Source">
            {{ rating.Source }}: {{ rating.Value }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="page-loader">
    <page-loader />
  </div>
</template>

<style>
.movie-title {
  margin-bottom: 10px;
  margin-left: 20px;
}
.movie-details {
  display: flex;
  align-items: top;
  margin: 20px;
}

.movie-poster img {
  max-width: 300px;
  margin: auto;
  margin-right: 20px;
}

.movie-info {
  font-size: 16px;
}

.movie-info h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.ratings {
  margin-top: 20px;
}

.page-loader {
  margin: auto;
  display: flex;
  align-items: center;
  height: 100vh;
}

@media screen and (max-width: 768px) {
  .movie-title {
    font-size: 18px;
    text-align: center;
  }
  .movie-details {
    flex-direction: column;
  }
  .movie-poster {
    margin: auto;
  }
  .movie-poster img {
    max-width: 100%;
    margin-bottom: 20px;
    margin-right: 0;
  }

  .movie-info {
    text-align: center;
    font-size: 14px;
  }

  .movie-info h1 {
    font-size: 20px;
  }
}
</style>
