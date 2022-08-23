import { Routes, Route } from "react-router-dom";
import HomeScreen from '../pages/HomeScreen'
import LoginScreen from '../pages/LoginScreen'
import RegistroScreen from '../pages/RegistroScreen'
import PedidosScreen from '../pages/PedidosScreen'
import ErrorScreen from '../pages/ErrorScreen'
import MenuScreen from "../pages/MenuScreen";

const RoutesApp = () => {
  return (
    <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/registro" element={<RegistroScreen />} />
        <Route path="/pedidos" element={<PedidosScreen />} />
        <Route path="/menu" element={<MenuScreen />} />
        <Route path="*" element={<ErrorScreen />} />
    </Routes>

    )
}

export default RoutesApp