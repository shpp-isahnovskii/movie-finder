<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['onClose'])
</script>

<template>
  <Teleport to="body">
    <div @click.self="emit('onClose')" class="modal-window">
      <slot></slot>
    </div>
  </Teleport>
</template>

<style>
.modal-window {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 10;
  display: flex;
  justify-items: center;
  align-items: center;
  padding: 0 4px;
}
</style>
