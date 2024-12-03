<script lang="ts" setup>
import type { SubNarItem } from '../types'

defineProps<{
  title: string
  subNav: SubNarItem[]
}>()
</script>

<template>
  <nav class="oceanus-sub-nav oceanus-safe-padding" w="full" role="navigation">
    <div class="oceanus-sub-nav-bg" />

    <div class="oceanus-sub-nav-content">
      <span class="oceanus-sub-nav-title">{{ title }}</span>

      <div class="items-center leading-5">
        <template v-for="(item, i) in subNav" :key="i">
          <AppLink :to="item.link" rel="noopener" class="oceanus-link-text">
            {{ item.text }}
          </AppLink>
          <span v-if="i !== subNav.length - 1" class="mx-4" />
        </template>
      </div>

      <div />
    </div>
  </nav>
</template>

<style lang="scss">
.oceanus-sub-nav {
  z-index: 30;
  top: 0;
  width: 100%;
  height: auto;
  min-height: 48px;
  transition: background-color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);

  &-title {
    color: var(--oceanus-c-text);
    font-size: 21px;
    line-height: 1.14286;
    font-weight: 600;
    letter-spacing: 0.011em;
    cursor: default;
    display: block;
    float: left;
    white-space: nowrap;
    transition: color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);
  }

  &-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--oceanus-c-nav-height);
  }

  .oceanus-link-text {
    display: inline-flex;
    max-width: 100%;
    height: 100%;
    font-size: 14px;
    line-height: 3.14286;
    font-weight: 400;
    line-height: inherit;
    color: var(--oceanus-c-text);
    text-overflow: ellipsis;
    letter-spacing: 0;
    transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
}

.oceanus-sub-nav-bg {
  z-index: -1;
  background: var(--oceanus-c-sub-nav-bg);
  backdrop-filter: saturate(180%) blur(20px);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: background-color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);

  &::after {
    content: '';
    background-color: var(--oceanus-c-sub-nav-bg-after);
    width: 100%;
    position: absolute;
    top: 100%;
    height: 1px;
  }
}
</style>
