<script setup lang="ts">
import type { Post } from 'valaxy'
import { usePostList } from 'valaxy'
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  type?: string
  posts?: Post[]
  curPage?: number
}>(), {
  curPage: 1,
})

const routes = usePostList({ type: props.type || '' })
const posts = computed(() => props.posts || routes.value)
</script>

<template>
  <ul class="divide-y divide-gray-200 dark:divide-gray-700">
    <template v-for="post in posts" :key="post.path">
      <Transition name="fade">
        <li v-if="post" class="py-8">
          <OceanArticleCardLayout :post="post" />
        </li>
      </Transition>
    </template>
  </ul>

  <div class="flex-center mx-auto w-40 border rounded-xl">
    View More Post
  </div>
</template>
