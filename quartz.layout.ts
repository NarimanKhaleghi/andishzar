import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.Darkmode(), Component.Spacer(), Component.PageTitle(), Component.Spacer(), Component.Search()],
  afterBody: [
    Component.Comments({
      provider: 'giscus',
      options: {
        repo: 'NarimanKhaleghi/andishzar',
        repoId: 'R_kgDOMkMo2g',
        category: 'Announcements',
        categoryId: 'DIC_kwDOMkMo2s4ChvvM',
        mapping: 'pathname',
        strict: true,
        reactionsEnabled: true,
        emitMetadata: true,
        inputPosition: 'top',
        theme: 'transparent_dark',
        loading: 'lazy'
      }
    }),
  ],
  footer: Component.Footer({
    links: {
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
    Component.TableOfContents(),
  ],
  left: [
  ],
  right: [
    Component.Explorer(),
    Component.RecentNotes(),
    Component.Backlinks(),
    Component.Graph(),
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
