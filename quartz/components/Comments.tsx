import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
// @ts-ignore
import script from "./scripts/comments.inline"

type Options = {
  provider: "giscus"
  options: {
    repo: `${string}/${string}`
    repoId: string
    category: string
    categoryId: string
    mapping?: "url" | "title" | "og:title" | "specific" | "number" | "pathname"
    strict?: boolean
    reactionsEnabled?: boolean
    emitMetadata?: boolean
    inputPosition?: "top" | "bottom"
    theme?: string
    lang?: string
    loading?: "lazy" | "eager"
  }
}

function boolToStringBool(b: boolean): string {
  return b ? "1" : "0"
}

export default ((opts: Options) => {
  const Comments: QuartzComponent = ({ displayClass, cfg, fileData }: QuartzComponentProps) => {
    // Check if the current page is index, 404, or tags
    const isExcludedPage = fileData.slug === "index" || fileData.slug === "404" || fileData.slug.startsWith("tags/") || fileData.slug.startsWith("6.-جنگل%E2%80%8Cها🏞%EF%B8%8F/") || fileData.slug.startsWith("5.-درختان🌳/") || fileData.slug.startsWith("4.-درختچه%E2%80%8Cها🌲/") || fileData.slug.startsWith("0.-نقطه-شروع😄/") || fileData.slug.startsWith("1.-بذرها🌱/") || fileData.slug.startsWith("2.-نهال%E2%80%8Cها🌿/") || fileData.slug.startsWith("3.-گیاهان🌾/") 
    
    if (isExcludedPage) {
      return null // Don't render comments on excluded pages
    }

    return (
      <div
        class={classNames(displayClass, "giscus")}
        data-repo={opts.options.repo}
        data-repo-id={opts.options.repoId}
        data-category={opts.options.category}
        data-category-id={opts.options.categoryId}
        data-mapping={opts.options.mapping ?? "pathname"}
        data-strict={boolToStringBool(opts.options.strict ?? true)}
        data-reactions-enabled={boolToStringBool(opts.options.reactionsEnabled ?? true)}
        data-emit-metadata={boolToStringBool(opts.options.emitMetadata ?? true)}
        data-input-position={opts.options.inputPosition ?? "top"}
        data-theme={opts.options.theme ?? "noborder_light"}
        data-loading={opts.options.loading ?? "lazy"}
        crossorigin="anonymous"
      ></div>
    )
  }

  Comments.afterDOMLoaded = script

  return Comments
}) satisfies QuartzComponentConstructor<Options>