import { BrowserRouter } from "react-router-dom";
import './App.css'
import "animate.css"
import NavbarApp from "./components/NavbarApp";
import RoutesApp from "./routes/RoutesApp";

function App() {
  return (
    <BrowserRouter>
    <NavbarApp />
    <RoutesApp />
    </BrowserRouter>
  )
}

export default App
