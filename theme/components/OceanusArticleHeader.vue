<script setup lang="ts">
import { useFrontmatter } from 'valaxy'

const frontmatter = useFrontmatter()
</script>

<template>
  <header 
    class="header-container relative flex flex-col justify-center text-center text-white" 
    :style="`background-image: url(${frontmatter.image || 'https://w.wallhaven.cc/full/jx/wallhaven-jxz67y.png'});`"
  >
    <div class="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10"></div>

    <div class="relative z-10 py-10 xl:py-16">
      <h1 class="header-title">{{ frontmatter.title }}</h1>
      <p class="header-date">
        <span>Updated:</span> <OceanDate class="inline-block" :date="frontmatter.date" />
      </p>
    </div>
  </header>
</template>

<style scoped>
.header-container {
  min-height: 300px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: background 0.3s ease-in-out;
}

.header-title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.header-date {
  font-size: 1rem;
  font-weight: 400;
  opacity: 0.8;
}
</style>
