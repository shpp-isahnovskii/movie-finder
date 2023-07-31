<script setup>
import { useRouter } from 'vue-router'
import SearchForm from '@/components/SearchForm.vue'

const router = useRouter()

function onSubmit(name) {
  router.push({ name: 'result', query: { s: name } })
}
function goToMyMovies() {
  router.push({ name: 'myMovies' })
}
</script>

<template>
  <section class="home-page-section">
    <h1 class="header">Movie searh engine, provided by Omdbapi open API</h1>
    <search-form @submit="onSubmit($event)" class="search-input" />
    <el-button @click="goToMyMovies">my movies</el-button>
  </section>
</template>

<style scoped>
.home-page-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-top: 10rem;
  font-size: 14px;
}
.header {
  flex-basis: 100%;
  text-align: center;
  margin: auto;
  margin-bottom: 20px;
}
@media screen and (min-width: 768px) {
  .search-input {
    padding: 0;
    margin-right: 10px;
  }
}
</style>
