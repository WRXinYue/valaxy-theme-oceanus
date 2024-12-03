<script lang="ts" setup>
import { useFrontmatter } from 'valaxy'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { viewScroll = false } = defineProps<{
  viewScroll?: boolean
}>()

const frontmatter = useFrontmatter()
const { t } = useI18n()
const route = useRoute()

const isIndex = computed(() => route.path.replace(/index.html$/, '') === '/')
</script>

<template>
  <!-- Note: The outer div ensures that sticky positioning works -->
  <div v-if="isIndex ? frontmatter.toc === true : frontmatter.toc !== false">
    <div class="sticky pt-[16px]" style="top: var(--oceanus-c-nav-height); width: var(--oceanus-c-aside-width);">
      <h2 font="serif black">
        {{ t('sidebar.toc') }}
      </h2>
      <div class="custom-container">
        <slot>
          <OceanusOutline :view-scroll="viewScroll" />
        </slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.toc-btn {
  color: var(--st-c-brand);
  background-color: white;
  z-index: var(--yun-z-toc-btn);
}
</style>
