import { useState } from "react";
import "../styles/App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes.jsx";
import { useTranslation } from "react-i18next";
import { Toaster } from "react-hot-toast";
function App() {
  const { t } = useTranslation();
  // console.log(i18n.language); //for testing  purpose  only

  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>

      {/* {t("studiopulse")} */}

      <Toaster position="top-right" reverseOrder={false}/>
    </>
  );
}
export default App;
