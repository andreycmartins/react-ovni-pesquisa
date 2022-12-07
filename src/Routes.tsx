import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Artigos } from "./pages/artigos"
import { Consultores } from "./pages/consultores"
import { Contato } from "./pages/contato"
import { Edicoes } from "./pages/edicoes"
import { Expediente } from "./pages/expediente"
import { More } from "./pages/more"
import { Index } from "./pages"

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        {["home", "index", "", "main"].map((path) => (
          <Route path={path} element={<Index />} />
        ))}
        <Route path="expediente" element={<Expediente />} />
        <Route path="edicoes" element={<Edicoes />} />
        <Route path="artigos" element={<Artigos />} />
        <Route path="contato" element={<Contato />} />
        <Route path="consultores" element={<Consultores />} />
        <Route path="more" element={<More />} />
      </Routes>
    </Router>
  )
}
