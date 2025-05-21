import { Route, Routes } from "react-router-dom";
import RegisterPage from '../pages/Register/RegisterPage.jsx'
import LoginPage from "../features/auth/LoginPage.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
