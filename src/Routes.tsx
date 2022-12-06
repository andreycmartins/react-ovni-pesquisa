import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Artigos } from "./pages/Artigos"
import { Consultores } from "./pages/Consultores"
import { Contatos } from "./pages/Contato"
import { Edicoes } from "./pages/Edicoes"
import { Expediente } from "./pages/Expediente"
import { More } from "./pages/More"
import { Ovnipesquisa } from "./pages/Ovnipesquisa"


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
