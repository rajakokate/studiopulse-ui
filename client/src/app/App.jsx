import { useState } from "react";
import "../styles/App.css";

import { useTranslation } from "react-i18next";
import i18n from "../i18n";

function App() {
  const { t } = useTranslation();
  console.log(i18n.language)

  return (
    <>
      {/* <div>StudioPulse</div> */}
      {t("studiopulse")}
    </>
  );
}

export default App;
