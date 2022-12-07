import { HeaderContainer } from "./styles"

export default function Header() {
  return (
    <div>
      <HeaderContainer>
        <h1 className="title">
          <strong>OVNI</strong> PESQUISA
        </h1>
        <nav className="navbar">
          <ul className="navlist">
            <li className="nav-item">
              <a href="" className="nav-link-item">
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
