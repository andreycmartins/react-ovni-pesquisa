import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Artigos } from "./pages/artigos"
import { Consultores } from "./pages/consultores"
import { Contatos } from "./pages/contato"
import { Edicoes } from "./pages/edicoes"
import { Expediente } from "./pages/expediente"
import { More } from "./pages/more"
import { Ovnipesquisa } from "./pages"


export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ovnipesquisa />} />
        <Route path="/expediente" element={<Expediente />} />
        <Route path="/edicoes" element={<Edicoes />} />
        <Route path="/artigos" element={<Artigos />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="/consultores" element={<Consultores />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </Router>
  )
}
