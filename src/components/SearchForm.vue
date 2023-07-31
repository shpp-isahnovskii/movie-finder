<script setup>
import { ref, computed, defineEmits } from 'vue'

const prop = defineProps({
  pending: {
    default: false
  }
})

const searchQuery = ref('')

const movieName = computed(() => {
  return searchQuery.value.trim()
})

const emit = defineEmits(['submit'])
function onSubmit() {
  emit('submit', movieName.value)
}
</script>

<template>
  <el-form v-bind="$attrs" @submit.prevent="onSubmit" class="search-form">
    <el-form-item class="form__item">
      <el-input
        class="form__input"
        v-model="searchQuery"
        placeholder="Search for movies.."
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        @click="onSubmit"
        type="primary"
        class="btn__submit"
        :disabled="!movieName || prop.pending"
        >Search</el-button
      >
    </el-form-item>
  </el-form>
</template>

<style scoped>
.search-form {
  display: flex;
  justify-content: center;
  padding: 20px;
}
.form__item {
  max-width: 20rem;
  width: 100%;
}
.form__input {
  padding-right: 0.5rem;
}
.el-form-item {
  margin-bottom: 0;
}
</style>
