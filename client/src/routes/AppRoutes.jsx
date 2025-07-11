import { Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/Register/RegisterPage.jsx";
import LoginPage from "../pages/Register/LoginPage.jsx";
import Dashboard from "../pages/Register/Dashboard.jsx";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
