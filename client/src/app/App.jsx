import { useState } from "react";
import "../styles/App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes.jsx";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

function App() {
  const { t } = useTranslation();
  // console.log(i18n.language); //for testing  purpose  only

  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>

      {/* <div>StudioPulse</div> */}

      {/* {t("studiopulse")} */}
    </>
  );
}
export default App;
