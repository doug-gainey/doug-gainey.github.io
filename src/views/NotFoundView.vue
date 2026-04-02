<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div role="status">
    <h1>Page Not Found</h1>
    <p>Error 404: The page you requested could not be found.</p>
    <nav aria-label="Navigation help">
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/projects">View Projects</RouterLink>
      <RouterLink to="/about">Learn About Me</RouterLink>
    </nav>
  </div>
</template>
