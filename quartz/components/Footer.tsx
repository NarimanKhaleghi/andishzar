import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          <a href="https://narimankhaleghi.github.io/andishzar/">Andishzar </a>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://narimankhaleghi.github.io/andishzar/0.-%D9%86%D9%82%D8%B7%D9%87-%D8%B4%D8%B1%D9%88%D8%B9%F0%9F%98%84/1.-%D8%AF%D8%B1%D8%A8%D8%A7%D8%B1%D9%87-%D8%AE%D9%88%D8%AF%D9%85">Nariman Khaleghi </a> © {year}
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
