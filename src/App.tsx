import { useState } from "react"
import Header from "./components/Header"
import { AppRoutes } from "./Routes"

function App() {
  const [menuIsVisible, setMenuIsVisible] = useState(true)

  return (
    <>
      <Header menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
      <AppRoutes />
    </>
  )
}

export default App
