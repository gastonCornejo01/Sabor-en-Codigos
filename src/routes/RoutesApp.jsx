import { Routes, Route } from "react-router-dom";
import HomeScreen from '../pages/HomeScreen'
import LoginScreen from '../pages/LoginScreen'
import PedidosScreen from '../pages/PedidosScreen'
import ErrorScreen from '../pages/ErrorScreen'
import MenuScreen from "../pages/MenuScreen";
import SignInApp from "../components/SignInApp";
import SignUpApp from "../components/SignUpApp";
import AdminScreen from "../pages/AdminScreen";

const RoutesApp = () => {
  return (
    <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/pedidos" element={<PedidosScreen />} />
        <Route path="/menu" element={<MenuScreen />} />
        <Route path="/iniciar" element={<SignInApp />} />
        <Route path="/registrar" element={<SignUpApp />} />
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="*" element={<ErrorScreen />} />
    </Routes>

    )
}

export default RoutesApp