import type { DefaultTheme } from 'valaxy'
import type { GitLogOptions } from 'valaxy-addon-git-log'

export namespace StarterTheme {
  export type Config = ThemeConfig
  export type Sidebar = any
}

export interface ThemeConfig extends DefaultTheme.Config {
  ui: Partial<{
    primary: string
  }>

  logo: Logo
  nav: NavItem[]
  navTitle: string | boolean
  /**
   * @zh 导航栏的工具按钮
   * @en Tool buttons to include in the navbar, like search or settings
   */
  navTools: NavTools

  hero: Partial<{
    title: string
    motto: string
    img: string | {
      light: string
      dark: string
    }
  }>

  sidebar: SidebarMulti

  footer: Partial<Footer>

  gitLog: GitLogOptions | boolean
}

export type NavTools = ('toggleLocale' | 'togglTheme' | 'search' | { icon: string, link?: string })[][]

export type Logo = string | boolean | {
  light: string
  dark: string
}

export interface BaseNavItem {
  text: string
  link: string
  icon?: string
  sidebar?: string[]
}

export interface NavItem extends BaseNavItem {
  subNav?: SubNavItem[]
}

export interface SubNavItem extends BaseNavItem {
  title?: string
}

export type SidebarMulti = SidebarItem[] | string[]

export interface SidebarItem {
  /**
   * The text label of the item.
   */
  text?: string

  /**
   * The link of the item.
   */
  link?: string

  /**
   * The children of the item.
   */
  items?: SidebarItem[]

  /**
   * If not specified, group is not collapsible.
   *
   * If `true`, group is collapsible and collapsed by default
   *
   * If `false`, group is collapsible but expanded by default
   */
  collapsed?: boolean

  /**
   * Base path for the children items.
   */
  base?: string

  /**
   * Customize text that appears on the footer of previous/next page.
   */
  docFooterText?: string

  rel?: string
  target?: string
}

export interface Footer {
  /**
   * 建站于
   */
  since: number

  /**
   * Powered by valaxy & valaxy-theme-${name}, default is yun
   */
  powered: boolean

  /**
   * Chinese Users | 中国用户
   * 备案 ICP
   * 国内用户需要在网站页脚展示备案 ICP 号
   * https://beian.miit.gov.cn/
   */
  icp?: string
}

export type ThemeUserConfig = Partial<ThemeConfig>
