import { BrowserRouter } from "react-router-dom";
import "animate.css"
import NavbarApp from "./components/NavbarApp";
import RoutesApp from "./routes/RoutesApp";
import FooterApp from "./components/FooterApp";
import "../src/css/fontBody.css"

function App() {
  return (
    <BrowserRouter>
    <NavbarApp />
    <RoutesApp />
    <FooterApp/>
    </BrowserRouter>
  )
}

export default App
