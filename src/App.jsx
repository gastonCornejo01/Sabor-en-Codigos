import { BrowserRouter } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar";
import RoutesApp from "./routes/RoutesApp";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <RoutesApp />
    </BrowserRouter>
  )
}

export default App
