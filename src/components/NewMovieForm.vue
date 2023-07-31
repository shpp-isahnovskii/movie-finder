<script setup>
import { ref } from 'vue'
import { useMovieStore } from '@/stores/movieModule'

import ModalWindow from '@/components/ModalWindow.vue'

const { addMovie } = useMovieStore()
const formData = ref({
  title: '',
  poster: '',
  director: '',
  year: ''
})

const isModalOpen = ref(false)

function submitForm() {
  const newMovie = {
    Title: formData.value.title,
    Poster: formData.value.poster,
    Director: formData.value.director,
    Year: formData.value.year
  }
  addMovie(newMovie)
  formReset()
  isModalOpen.value = false
}
function formReset() {
  formData.value = {
    title: '',
    poster: '',
    director: '',
    year: ''
  }
}
</script>

<template>
  <el-button @click="isModalOpen = true">add movie</el-button>
  <modal-window v-if="isModalOpen" @onClose="isModalOpen = false">
    <div class="modal-form">
      <h3>Add Your Own Movie</h3>
      <el-form :model="formData" label-width="60px">
        <el-form-item label="Title">
          <el-input v-model="formData.title" />
        </el-form-item>
        <el-form-item label="Poster">
          <el-input v-model="formData.poster" />
        </el-form-item>
        <el-form-item label="Director">
          <el-input v-model="formData.director" />
        </el-form-item>
        <el-form-item label="Year">
          <el-input v-model="formData.year" />
        </el-form-item>
        <el-form-item class="submit-item">
          <el-button class="submit-btn" type="primary" @click="submitForm">Submit</el-button>
        </el-form-item>
      </el-form>
    </div>
  </modal-window>
</template>

<style>
.modal-form {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: white;
  padding: 30px 60px 20px 60px;
  border-radius: 12px;
  margin: auto;
}
.el-form {
  width: 100%;
}
.modal-form h3 {
  flex-basis: 100%;
  text-align: center;
  margin-bottom: 20px;
}
.el-form-item {
  width: 100%;
}
.submit-item .el-form-item__content {
  margin-left: 0 !important;
}
.submit-btn {
  margin: auto;
  margin-top: 10px;
  width: 120px;
}
</style>
