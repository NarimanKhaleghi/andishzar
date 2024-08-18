const changeTheme = (e: CustomEventMap["themechange"]) => {
  const theme = e.detail.theme
  const iframe = document.querySelector("iframe.giscus-frame") as HTMLIFrameElement
  if (!iframe) {
    return
  }

  if (!iframe.contentWindow) {
    return
  }

  iframe.contentWindow.postMessage(
    {
      giscus: {
        setConfig: {
          theme: theme,
        },
      },
    },
    "https://giscus.app",
  )
}

type GiscusElement = Omit<HTMLElement, "dataset"> & {
  dataset: DOMStringMap & {
    repo: `${string}/${string}`
    repoId: string
    category: string
    categoryId: string
    mapping: "url" | "title" | "og:title" | "specific" | "number" | "pathname"
    strict: string
    reactionsEnabled: string
    inputPosition: "top" | "bottom"
  }
}

document.addEventListener("nav", () => {
  const giscusContainer = document.querySelector(".giscus") as GiscusElement
  if (!giscusContainer) {
    return
  }

  const giscusScript = document.createElement("script")
  giscusScript.src = "https://giscus.app/client.js"
  giscusScript.async = true
  giscusScript.crossOrigin = "anonymous"
  giscusScript.setAttribute("data-loading", "lazy")
  giscusScript.setAttribute("data-emit-metadata", "0")
  giscusScript.setAttribute("data-repo", "NarimanKhaleghi/andishzar")
  giscusScript.setAttribute("data-repo-id", "R_kgDOMkMo2g")
  giscusScript.setAttribute("data-category", "Announcements")
  giscusScript.setAttribute("data-category-id", "DIC_kwDOMkMo2s4ChvvM")
  giscusScript.setAttribute("data-mapping", "pathname")
  giscusScript.setAttribute("data-strict", "1")
  giscusScript.setAttribute("data-reactions-enabled", "1")
  giscusScript.setAttribute("data-emit-metadata", "1")
  giscusScript.setAttribute("data-input-position", "top")
  giscusScript.setAttribute("data-lang", "fa")
  giscusScript.setAttribute("data-loading", "lazy")

  const theme = document.documentElement.getAttribute("saved-theme")
  if (theme) {
    giscusScript.setAttribute("data-theme", theme)
  }

  giscusContainer.appendChild(giscusScript)

  document.addEventListener("themechange", changeTheme)
  window.addCleanup(() => document.removeEventListener("themechange", changeTheme))
})
