<script setup lang="ts">
import type { NavItem, SubNarItem } from '../types'
import { useSiteConfig } from 'valaxy'
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useThemeConfig } from '../composables'

const themeConfig = useThemeConfig()
const siteConfig = useSiteConfig()
const route = useRoute()

const { favicon, nav, title } = themeConfig.value.header

const currentNavItem = ref<NavItem>()
const currentSubNav = ref<SubNarItem[]>()

const navFavicon = computed(() => favicon === true ? siteConfig.value.favicon : favicon)
const activeParentLink = computed(() => {
  const pathSegments = route.path.split('/').filter(Boolean)
  if (pathSegments.length > 1) {
    return `/${pathSegments.slice(0, -1).join('/')}`
  }
  else if (nav?.some(item => item.link === route.path)) {
    return route.path
  }
  return '/'
})

function findNav(navItems: NavItem[], path: string): NavItem | SubNarItem | undefined {
  for (const item of navItems) {
    if (item.link === path) {
      return item
    }
    if (item.subNav) {
      const foundSubNav = findNav(item.subNav, path)
      if (foundSubNav) {
        currentNavItem.value = item
        return foundSubNav
      }
    }
  }
  return undefined
}

watch(() => route.path, () => {
  currentNavItem.value = findNav(nav!, activeParentLink.value)
  currentSubNav.value = currentNavItem.value?.subNav
}, { immediate: true })
</script>

<template>
  <OceanusNavToolbar />
  <OceanusNav :nav="nav" :favicon="navFavicon" :title :class="!currentSubNav && 'sticky'" />
  <OceanusSubNav v-show="currentSubNav" :title="currentNavItem?.text" :sub-nav="currentSubNav" :class="currentSubNav && 'sticky'" />
</template>
