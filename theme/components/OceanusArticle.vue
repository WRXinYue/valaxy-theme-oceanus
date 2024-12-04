<script setup lang="ts">
import { useFrontmatter, usePostList, useSidebar } from 'valaxy'
import { computed } from 'vue'

import { useRoute } from 'vue-router'

const { isOpen, open, close } = useSidebar()
const frontmatter = useFrontmatter()
const route = useRoute()
const posts = usePostList()

function findCurrentIndex() {
  return posts.value.findIndex(p => p.path === route.path)
}

const nextPost = computed(() => posts.value[findCurrentIndex() - 1])
const prevPost = computed(() => posts.value[findCurrentIndex() + 1])
</script>

<template>
  <div class="oceanus-article oceanus-safe-padding mx-auto min-w-0">
    <aside />

    <!-- <aside style="border-left: 1px solid rgba(0, 0, 0, 0.04); border-right: 1px solid rgba(0, 0, 0, .1);">
      <slot name="sidebar">
        <OceanusSidebar :open="isOpen" />
      </slot>
    </aside> -->

    <div style="border-right: 1px solid rgba(0, 0, 0, 0.04);">
      <article flex="~" class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
        <!-- <OceanusArticleHeader /> -->

        <div
          class="pb-16 xl:grid xl:grid-cols-2 xl:gap-x-10 divide-y divide-gray-200 xl:pb-20 xl:divide-y-0 dark:divide-gray-700"
          style="grid-template-rows: auto 1fr"
        >
          <div class="xl:col-span-3 xl:row-span-2 divide-y divide-gray-200 xl:pb-0 dark:divide-gray-700">
            <slot />
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<style lang="scss">
@use 'valaxy/client/styles/mixins/index.scss' as *;

.oceanus-article {
  grid-template-columns: 0 1fr;
  display: grid;
  grid-template-rows: 1fr;

  @include screen('md') {
    grid-template-columns: var(--oceanus-c-aside-width) 1fr;
  }
}
</style>
