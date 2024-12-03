<script lang="ts" setup>
import type { SidebarMulti } from '../types'
import { removeItemFromCategory, useCategories, usePageList, useSidebar } from 'valaxy'
import { computed } from 'vue'
import { useThemeConfig } from '../composables'

const props = withDefaults(defineProps<{
  sidebar?: SidebarMulti
}>(), {})

const themeConfig = useThemeConfig()

const pages = usePageList()

const cs = useCategories('', pages.value)

const sidebar = computed(() => props.sidebar || themeConfig.value.sidebar)

const categories = computed(() => {
  const cList = cs.value
  // Remove the "Unclassified" category
  removeItemFromCategory(cList, 'Uncategorized')

  if (sidebar.value) {
    cList.children.forEach((item) => {
      if (!sidebar.value.includes(item.name))
        removeItemFromCategory(cList, item.name)
    })
  }

  return cList
})

const { hasSidebar } = useSidebar()
</script>

<template>
  <div class="sakura-aside <md:hidden">
    <aside v-if="hasSidebar" class="oceanus-sidebar" @click.stop>
      <ol v-for="(item, i) in sidebar" :key="i" text="left">
        <template v-if="typeof item === 'string'">
          <OceanusSidebarCategoryByName
            :categories="categories"
            :item="item"
          />
        </template>
        <OceanusSidebarItem v-else :item="item" :depth="0" />
      </ol>
    </aside>
  </div>
</template>

<style lang="scss">
.sakura-aside {
  position: sticky;
  // top: var(--st-c-navbar-height);
  top: var(--oceanus-c-nav-height);

  // width: var(--st-c-aside-width);
  max-height: calc(100vh - var(--oceanus-c-nav-height));
  transition:
    box-shadow var(--va-transition-duration),
    background-color var(--va-transition-duration),
    opacity 0.25s,
    transform var(--va-transition-duration) cubic-bezier(0.19, 1, 0.22, 1),
    top var(--va-transition-duration);
  overflow-y: auto;
  padding-bottom: 2rem;
}

.oceanus-sidebar > :not(:first-child) {
  margin-top: 16px;
}
</style>
