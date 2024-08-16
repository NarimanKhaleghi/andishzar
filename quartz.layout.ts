import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.PageTitle(), Component.Spacer(), Component.Search(), Component.Darkmode()],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "Telegram": "https://t.me/NarimanKhaleghi",
      "Twitter": "https://x.com/narimankhaleghi?t=Jz-kvII7gro06syTZfBsrg&s=09",
      "Instagram": "https://www.instagram.com/narimankhaleghi?igsh=MWpmYmNleXE1M21qbg==",
      "LinkedIn": "https://www.linkedin.com/in/nariman-khaleghi-4867521a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      "GitHub": "https://github.com/NarimanKhaleghi/",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.MobileOnly(Component.TableOfContents()),
  ],
  left: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.DesktopOnly(Component.Backlinks()),
  ],
  right: [
    Component.Graph(),
    Component.MobileOnly(Component.Backlinks()),
    Component.Explorer(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.MobileOnly(Component.TableOfContents()),
  ],
  left: [
    Component.DesktopOnly(Component.Backlinks()),
    Component.DesktopOnly(Component.TableOfContents())
  ],
  right: [
    Component.Graph(),
    Component.MobileOnly(Component.Backlinks()),
    Component.Explorer(),
  ],
}
