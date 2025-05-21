import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import InputField from "../../components/inputField";
import SelectField from "../../components/SelectField";

import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
  //initialize i18next app
  const { t } = useTranslation();

  const { formData, setFormData } = useState({
    username: "",
    email: "",
    phoneNumber: "",
    department: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return <div className={styles.container}>
    <h2>{t("register")}</h2>
  </div>;
};

export default RegisterPage;