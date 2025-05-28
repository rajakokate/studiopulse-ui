import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "../../components/inputField";
import SelectField from "../../components/SelectField";
import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
  //initialize i18next app
  const { t } = useTranslation();

  //Validation using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required(t("errors.username")),
    email: Yup.string()
      .email(t("errors.invalidEmail"))
      .required(t("errors.email")),
    phoneNumber: Yup.string().required(t("errors.phoneNumber")),
    password: Yup.string()
      .min(6, t("errors.passwordLength"))
      .required(t("errors.password")),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], t("errors.confirmPasswordMatch"))
      .required(t("errors.confirmPassword")),
    department: Yup.string().required(t("errors.department")),
    role: Yup.string().required(t("errors.role")),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      department: "",
      role: "",
      department: "",
      role: "",
      //Add more fields later (email, password, etc)
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Submitted form", values);

      //API call later
    },
  });

  return (
    <div className={styles.container}>
      <h2>{t("register")}</h2>

      <form onSubmit={formik.handleSubmit}>
        <InputField
          label={t("form.username")}
          type="text"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && formik.errors.username}
          placeholder={t("form.username")}
        />

        <InputField
          label={t("form.email")}
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && formik.errors.email}
          placeholder={t("form.email")}
        />

        <InputField
          label={t("form.phoneNumber")}
          type="tel"
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phoneNumber && formik.errors.phoneNumber}
          placeholder={t("form.phoneNumber")}
        />

        <InputField
          label={t("form.password")}
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && formik.errors.password}
          placeholder={t("form.password")}
        />

        <InputField
          label={t("form.confirmPassword")}
          type="password"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
          placeholder={t("form.confirmPassword")}
        />

        <SelectField
          label={t("form.department")}
          name="department"
          value={formik.values.department}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.department && formik.errors.department}
          options={[
            { value: "vfx", label: t("departments.vfx") },
            { value: "paint", label: t("departments.paint") },
            { value: "roto", label: t("departments.roto") },
          ]}
        />

        <SelectField
          label={t("form.role")}
          name="role"
          value={formik.values.role}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.role && formik.errors.role}
          options={[
            { value: "projectManager", label: t("roles.projectManager") },
            { value: "supervisor", label: t("roles.supervisor") },
            { value: "teamlead", label: t("roles.teamlead") },
            { value: "artist", label: t("roles.artist") },
          ]}
        />
        {/* 
        
        


        */}
        <button type="submit">{t("register")}</button>
      </form>
    </div>
  );
};

export default RegisterPage;
