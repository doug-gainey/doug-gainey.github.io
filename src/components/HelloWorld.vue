<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="text-center">
    <h1>{{ msg }}</h1>
    <h3>
      Welcome to my personal website!
    </h3>
    <p>
      Made with <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </p>
  </div>
</template>