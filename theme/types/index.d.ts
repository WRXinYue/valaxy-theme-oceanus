import type { DefaultTheme } from 'valaxy'

export namespace StarterTheme {
  export type Config = ThemeConfig
  export type Sidebar = any
}

export interface ThemeConfig extends DefaultTheme.Config {
  header: Partial<{
    favicon: string | boolean | {
      light: string
      dark: string
    }
    title: string
    nav: NavItem[]
  }>

  hero: Partial<{
    title: string
    motto: string
    img: string
  }>

  features: Partial<{
    icon: string
    title: string
    description: string
  }[]>

  sidebar: SidebarMulti

  footer: Partial<Footer>
}

export interface NavItem {
  text: string
  link: string
  icon?: string
  subNav?: SubNarItem[]
}

export interface SubNarItem {
  title?: string
  text: string
  link: string
  icon?: string
}

export interface SidebarMulti {
  [path: string]: SidebarItem[] | { items: SidebarItem[], base: string }
}
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
