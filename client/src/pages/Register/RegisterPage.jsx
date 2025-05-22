import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import InputField from "../../components/inputField";
import SelectField from "../../components/SelectField";
import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
  //initialize i18next app

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    department: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className={styles.container}>
      <h2>{t("register")}</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label={t("form.username")}
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder={t("form.username")}
        />
        <InputField
          label={t("form.email")}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={t("form.email")}
        />
        <InputField
          label={t("form.phoneNumber")}
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder={t("form.phoneNumber")}
        />
        <SelectField
          label={t("form.department")}
          name="department"
          value={formData.department}
          onChange={handleChange}
          options={[
            t("departments.vfx"),
            t("departments.paint"),
            t("departments.roto")
          ]}
        />
        <InputField
          label={t("form.password")}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder={t("form.password")}
        />
        <InputField
          label={t("form.confirmPassword")}
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder={t("form.confirmPassword")}
        />
        <SelectField
          label={t("form.role")}
          name="role"
          value={formData.role}
          onChange={handleChange}
          options={[
            t("roles.projectManager"),
            t("roles.supervisor"),
            t("roles.teamlead"),
            t("roles.artist"),
          ]}
        />
        <button type="submit">{t("register")}</button>
      </form>
    </div>
  );
};

export default RegisterPage;
