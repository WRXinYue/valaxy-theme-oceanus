<script setup lang="ts">
import { useSiteStore } from 'valaxy'
import { computed } from 'vue'

const site = useSiteStore()

const posts = computed(() => (
  site.postList).filter(post => import.meta.env.DEV ? true : !post.hide),
)
</script>

<template>
  <Layout>
    <!-- <OceanusHero /> -->
    <OceanArticleList />
    <!-- <OceanusFeatureSection /> -->
    <RouterView />
  </Layout>
</template>

<style lang="scss" scoped>
.post-list {
  .post-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 501px;
    text-decoration: none;
    color: black;
    transition: background-color 400ms cubic-bezier(0.4, 0, 0.25, 1);
    // margin: 1em 0;
    overflow: hidden;

    &:hover {
      background: #f5f5f5;
    }

    .post-card-title {
      font-size: 18px;
      font-weight: 700;
      line-height: 21.48px;
    }

    .post-card-excerpt {
      color: inherit;
      font-size: 14px;
      font-weight: 400;
      line-height: 19.09px;
      margin-top: 10px;
    }

    .post-card-content {
      padding-left: 9.3%;
      padding-top: 10vw;
      padding-bottom: 10vw;
    }

    .post-card-img {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(1);
        transition:
          transform 400ms cubic-bezier(0.4, 0, 0.25, 1),
          filter 400ms cubic-bezier(0.4, 0, 0.25, 1);

        &:hover {
          transform: scale(1.03);
          filter: brightness(0.85);
        }
      }
    }

    &.dark-mode {
      color: #fff;
      background-color: #000;

      &:hover {
        background: #201f1e;
      }
    }
  }
}
</style>
