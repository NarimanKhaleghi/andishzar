import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🌱اندیش‌زار",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "fa-IR",
    baseUrl: "andishzar.ir",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fdfbf0",           // پس‌زمینه زرد بسیار ملایم
          lightgray: "#e6e8d4",       // خاکستری مایل به سبز روشن
          gray: "#a0a895",            // خاکستری مایل به سبز متوسط
          darkgray: "#5a6650",        // خاکستری مایل به سبز تیره
          dark: "#2c3327",            // سبز تیره
          secondary: "#3a7d44",       // سبز زمردی (برای قدرت و طراوت)
          tertiary: "#f9c22e",        // زرد طلایی (برای گرمی و صمیمیت)
          highlight: "rgba(122, 191, 133, 0.2)", // سایه سبز روشن
          textHighlight: "#ffd956", // هایلایت متن زرد
        },
        darkMode: {
          light: "#1c1e17",           // پس‌زمینه تیره با ته‌رنگ سبز
          lightgray: "#2f3329",       // خاکستری تیره مایل به سبز
          gray: "#5a6650",            // خاکستری متوسط مایل به سبز
          darkgray: "#b8c0ac",        // خاکستری روشن مایل به سبز
          dark: "#e6e8d4",            // نزدیک به سفید با ته‌رنگ سبز
          secondary: "#5fa463",       // سبز روشن‌تر برای دارک مود
          tertiary: "#f9c22e",        // همان زرد طلایی
          highlight: "rgba(122, 191, 133, 0.15)", // سایه سبز تیره‌تر
          textHighlight: "#ffd956", // هایلایت متن زرد شفاف‌تر
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
