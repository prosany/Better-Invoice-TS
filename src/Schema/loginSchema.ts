import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required("Email is required")
    .matches(/^[\w.+]+@gmail\.com$/, "Email must be gmail."),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters."),
});

export default loginSchema;
