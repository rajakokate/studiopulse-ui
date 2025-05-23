import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import InputField from "../../components/inputField";
import SelectField from "../../components/SelectField";
import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
  //initialize i18next app
  const { t } = useTranslation();

  // const [formData, setFormData] = useState();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };
  return (
    <div className={styles.container}>
      <h2>{t("register")}</h2>

      <Formik
        initialValues={{
          username: "",
          email: "",
          phoneNumber: "",
          department: "",
          password: "",
          confirmPassword: "",
          role: "",
        }}
        onSubmit={(values) => {
          console.log("Form Submitted", values);
          //API Call logic here
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <InputField
              label={t("form.username")}
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={t("form.username")}
            />
            <InputField
              label={t("form.email")}
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={t("form.email")}
            />
            <InputField
              label={t("form.phoneNumber")}
              type="tel"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={t("form.phoneNumber")}
            />
            <SelectField
              label={t("form.department")}
              name="department"
              value={values.department}
              onChange={handleChange}
              onBlur={handleBlur}
              options={[
                { value: "vfx", label: t("departments.vfx") },
                { value: "paint", label: t("departments.paint") },
                { value: "roto", label: t("departments.roto") },
              ]}
            />
            <InputField
              label={t("form.password")}
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder={t("form.password")}
            />
            <InputField
              label={t("form.confirmPassword")}
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={t("form.confirmPassword")}
            />
            <SelectField
              label={t("form.role")}
              name="role"
              value={values.role}
              onChange={handleChange}
              onBlur={handleBlur}
              options={[
                { value: "projectManager", label: t("roles.projectManager") },
                { value: "supervisor", label: t("roles.supervisor") },
                { value: "teamlead", label: t("roles.teamlead") },
                { value: "artist", label: t("roles.artist") },
              ]}
            />
            <button type="submit">{t("register")}</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterPage;
