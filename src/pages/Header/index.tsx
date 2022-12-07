export default function Header() {
  const header = {
    display: "flex",
    justifyContent: "center",
  }
  const navlist = {
    display: "flex",
    gap: "2em",
    listStyle: "none",
  }
  const title = {
    textAlign: "center",
  }
  const navItem = {
    padding: "8px 16px",
    backgroundColor: "red"
  }

  return (
    <div>
      <header className="header" style={header}>
        <nav className="navbar">
          <h1 className="title" style={title}>
            <strong>OVNI</strong> PESQUISA
          </h1>
          <ul className="navlist" style={navlist}>
            <li className="nav-item" style={navItem}>
              <a href="" className="nav-link-item">
                OVNI PESQUISA
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link-item">
                Expediente
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link-item">
                Edições
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link-item">
                Artigos
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link-item">
                Contato
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link-item">
                Consultores
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link-item">
                Mais
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
