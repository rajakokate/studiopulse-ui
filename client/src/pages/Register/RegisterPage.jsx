import React, { useState, useEffect } from "react";
import { useTranslation, withTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";
import API from "../../utils/api";
import InputField from "../../components/inputField";
import SelectField from "../../components/SelectField";
import { useRoles } from "../../hooks/useRoles";
import toast from "react-hot-toast";
const RegisterPage = () => {
  //initialize i18next app
  const { t } = useTranslation();

  const roleOptions = useRoles(t);

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
    // department: Yup.string().required(t("errors.department")),
    role: Yup.string().required(t("errors.role")),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      // department: "",
      role: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setErrors, resetForm }) => {
      try {
        // Transform values to match backend field names
        const payload = {
          username: values.username,
          email: values.email,
          contact: values.phoneNumber,
          password: values.password,
          password2: values.confirmPassword,
          role: values.role,
        };

        const response = await API.post("/studio-pulse/register/", payload);

        //optionally display a success message
        toast.success("Registration successful! Please log in.")

        resetForm(); // clear form after success
      } catch (error) {
        if (error.response && error.response.data) {
          //Backend returns specific errors
          setErrors(error.response.data);
        } else {
          toast.error("Something went wrong. Try again.");
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-xl">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-800  mb-6">
            {t("register")}
          </h2>

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

          {/* temporary commenting out department  */}
          {/* <SelectField
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
        /> */}

          <SelectField
            label={t("form.role")}
            name="role"
            value={formik.values.role}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.role && formik.errors.role}
            options={roleOptions}
          />

          {/* 
        
        */}
          <button
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            type="submit"
          >
            {t("register")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
