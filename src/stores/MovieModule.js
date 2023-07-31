import { defineStore } from 'pinia'
import api from '@/api/axios'

export const useMovieStore = defineStore('movie', {
  state: () => ({
    movies: [],
    selectedMovie: null,
    myMovies: []
  }),
  actions: {
    async fetchMovies(query) {
      return api.get('', { params: query }).then((res) => {
        this.movies = res.data.Search
        return res.data.Search
      })
    },
    async movieDetails(query) {
      return api.get('', { params: query }).then((res) => {
        this.selectedMovie = res.data
        return res.data.Search
      })
    },
    addMovie(movie) {
      this.myMovies.push(movie)
    }
  }
})
