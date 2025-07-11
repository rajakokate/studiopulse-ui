import API from "../../utils/api";
import toast from "react-hot-toast";
import React from "react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "../../components/inputField";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSucess } from "../../features/auth/authSlice";

const LoginPage = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  //validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t("errors.invalidEmail"))
      .required(t("errors.email")),
    password: Yup.string().required("errors.password"),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const payload = {
          email: values.email,
          password: values.password,
        };
        
        console.log("CSRF TOken sent", document.cookie)

        await API.post("/studio-pulse/signin/", payload, {
          withCredentials: true, // to send cookies
        });

        // Fetch user from session
        const mRes = await API.get('/studio-pulse/me/')
        
        //remove password field
        const {password,...safeUser} = mRes.data;

        //Dispatch to redux
        dispatch(loginSucess(safeUser))

        toast.success("Login Successful");

        //add navigation, temporary check response
        navigate("/dashboard");
        console.log("Login response", response.data);
      } catch (error) {
        if (error.response && error.response.data) {
          setErrors(error.response.data);
          toast.error("Login failed, Check your credentials");
        } else {
          toast.error("something went wrong. Try again. ");
        }
      } finally {
        setSubmitting(false);
      }
    },
  });
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4  py-8">
      <div className="w-full max-w-xl">
        <form
          className="bg-white p-8 rounded-xl  shadow-md w-full max-w-md"
          onSubmit={formik.handleSubmit}
        >
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            {t("login")}
          </h2>
          {/* Email */}
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
          {/* Password */}
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

          <button
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 mt-4"
            type="submit"
          >
            {t("login")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
