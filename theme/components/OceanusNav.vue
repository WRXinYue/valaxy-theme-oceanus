<script lang="ts" setup>
import type { NavItem } from '../types'

defineProps<{
  nav: NavItem[]
  title: string
  favicon?: string
}>()
</script>

<template>
  <nav class="oceanus-nav oceanus-safe-padding" w="full" role="navigation">
    <RouterLink to="/" :aria-label="title">
      <div class="h-30px flex text-center text-xl">
        <img v-if="favicon" class="mr-2 object-cover" alt="logo" :src="favicon">
        <span class="oceanus-nav-title oceanus-text microsoft-yahei md:inline">{{ title }}</span>
      </div>
    </RouterLink>

    <div class="items-center leading-5">
      <template v-for="(item, i) in nav" :key="i">
        <RouterLink
          :to="item.link"
          rel="noopener"
          class="oceanus-link-text"
        >
          {{ item.text }}
        </RouterLink>
        <span v-if="i !== nav.length - 1" class="mx-4" />
      </template>
    </div>

    <div i-tabler-search items-center />
    <!-- <input
        v-model="keyword"
        :placeholder="t('Search')"
        class="text-[#9e9e9e h-12 w-full"
        bg="[#f5f5f5] dark:bg-dark-500"
        rounded-lg pl-10 pr-4 transition
        type="text" name="search"
      > -->
  </nav>
</template>

<style lang="scss">
.oceanus-nav {
  top: 0;
  z-index: 4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--oceanus-c-nav-height);
  // box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.135);
  // border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: var(--oceanus-c-nav-bg);
  backdrop-filter: saturate(180%) blur(20px);

  &-title {
    // font-size: 1.5rem;
    font-size: 1em;
    line-height: inherit;
    font-weight: 700;
    text-align: center;
    display: inline-flex;
    max-width: 100%;

    height: 100%;
  }

  .oceanus-link-text {
    display: inline-flex;
    max-width: 100%;
    height: 100%;
    font-size: 12px;
    font-weight: 400;
    line-height: 3.14286;
    color: var(--oceanus-c-text);
    text-overflow: ellipsis;
    letter-spacing: 0;
    transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
}
</style>
