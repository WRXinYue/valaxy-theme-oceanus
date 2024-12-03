<script lang="ts" setup>
import { useSiteConfig, useValaxyConfig } from 'valaxy'
import pkg from 'valaxy/package.json'
import { capitalize, computed } from 'vue'

import { useI18n } from 'vue-i18n'
import { useThemeConfig } from '../composables'

const { t } = useI18n()

const config = useValaxyConfig()
const siteConfig = useSiteConfig()
const themeConfig = useThemeConfig()

const year = new Date().getFullYear()

const isThisYear = computed(() => {
  return year === themeConfig.value.footer.since
})

const poweredHtml = computed(() => t('footer.powered', [`<a class="oceanus-text" href="${pkg.repository}" target="_blank" rel="noopener">Valaxy</a> v${pkg.version}`]))
const themeHtml = computed(() => t('footer.theme', [`<a class="oceanus-text" href="${themeConfig.value.pkg.homepage}" :title="valaxy-theme-${config.value.theme}" target="_blank" rel="noopener">${capitalize(config.value.theme)}</a> v${themeConfig.value.pkg.version}`]))
</script>

<template>
  <footer class="oceanus-footer">
    <div class="footer-content">
      <div class="footer-columns">
        <template v-for="(nav, index) in themeConfig.header.nav">
          <div class="footer-column" :key="index" v-if="nav.subNav?.length">
            <h4>{{ nav.text }}</h4>
            <ul>
              <li v-for="subNav in nav.subNav" :key="subNav.text">
                <AppLink :to="subNav.link">{{ subNav.text }}</AppLink>
              </li>
            </ul>
          </div>
        </template>
      </div>

      <div class="footer-bottom">
        <span class="copyright" p="1">
          &copy;
          <template v-if="!isThisYear">
            {{ themeConfig.footer.since }} -
          </template>
          {{ year }}
          <a m="x-2" class="oceanus-text" 
            target="_blank" 
            :href="siteConfig.author.link">
            {{ siteConfig.author.name }}
          </a>
        </span>

        <span v-if="themeConfig.footer.powered" class="powered" m="2">
          <span v-html="poweredHtml" /> | <span v-html="themeHtml" />
        </span>

        <div v-if="themeConfig.footer.icp" class="icp" p="y-2" v-html="themeConfig.footer.icp">
        </div>
      </div>

    </div>
  </footer>
</template>

<style lang="scss">
.oceanus-footer {
  background-color: #f5f5f7;
  color: #333;
  padding: 3rem 2rem;

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-columns {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .footer-column {
    width: unset;
    float: unset;
    flex-basis: 25%;

    h4 {
      font-size: 12px;
      line-height: 1.33337;
      font-weight: 600;
      color: #333;
      letter-spacing: -.01em;
      margin-bottom: 0.8em;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        display: flex; 
        pointer-events: auto;
        margin-bottom: 0.8em;
        list-style: none;

        a {
          color: #515154;
          text-decoration: none;
          font-size: 12px;
          line-height: 1.33337;
          font-weight: 400;
          letter-spacing: -.01em;

          &:hover {
            color: #000;
            text-decoration: underline;
          }
        }
      }
    }
  }

  .social-links i {
    margin-right: 0.5rem;
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border-top: 1px solid #ddd;
    padding-top: 1rem;
    font-size: 0.875rem;

    a {
      color: #555;
      text-decoration: none;

      &:hover {
        color: #000;
      }
    }
  }
}
</style>
