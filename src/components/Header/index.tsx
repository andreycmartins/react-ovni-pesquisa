import { HeaderContainer } from "./styles"
import { IoClose } from "react-icons/io5"
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react"

export default function Header() {
  const [active, setMode] = useState(false)
  const ToggleMode = () => {
    setMode(!active)
  }
  return (
    <div>
      <HeaderContainer>
        <IoClose className="close-button" />
        <div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}>
          <GiHamburgerMenu className="hamburguer" size={45} />
        </div>
        <h1 className="title">
          <strong>OVNI</strong> PESQUISA
        </h1>
        <nav className={active ? "menu menuOpen" : "menu menuClose"}>
          <ul className="navlist">
            <li className="nav-item">
              <a href="/" className="nav-link-item ovni-pesquisa-button">
                OVNI PESQUISA
              </a>
            </li>
            <li className="nav-item">
              <a href="/expediente" className="nav-link-item">
                Expediente
              </a>
            </li>
            <li className="nav-item">
              <a href="/edicoes" className="nav-link-item">
                Edições
              </a>
            </li>
            <li className="nav-item">
              <a href="/artigos" className="nav-link-item">
                Artigos
              </a>
            </li>
            <li className="nav-item">
              <a href="/contato" className="nav-link-item">
                Contato
              </a>
            </li>
            <li className="nav-item">
              <a href="/consultores" className="nav-link-item">
                Consultores
              </a>
            </li>
            <li className="nav-item">
              <a href="/more" className="nav-link-item">
                Mais
              </a>
            </li>
          </ul>
        </nav>
      </HeaderContainer>
    </div>
  )
}
