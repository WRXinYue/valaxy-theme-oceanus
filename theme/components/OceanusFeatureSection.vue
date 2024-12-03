<script setup lang="ts">
import { useThemeConfig } from '../composables'

const themeConfig = useThemeConfig()
</script>

<template>
  <section class="oceanus-feature-section">
    <h2 class="section-title">Explore Our Features</h2>

    <div class="features-container">
      <div 
        v-for="(feature, index) in themeConfig.features" 
        :key="index" 
        class="feature-card"
      >
        <div class="icon">{{ feature.icon }}</div>
        <h3 class="feature-title">{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.oceanus-feature-section {
  padding: 6rem 2rem;
  background-color: #fafafa;
  text-align: center;

  .section-title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    font-weight: 600;
    color: #1d1d1f;
  }

  .features-container {
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;
  }

  .feature-card {
    background-color: white;
    border-radius: 24px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
    padding: 2.5rem;
    max-width: 320px;
    text-align: center;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 36px rgba(0, 0, 0, 0.1);
    }

    .icon {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }

    .feature-title {
      font-size: 1.75rem;
      margin-bottom: 0.75rem;
      font-weight: 500;
      color: #1d1d1f;
    }

    p {
      color: #6e6e73;
      font-size: 1rem;
      line-height: 1.6;
    }
  }
}
</style>
