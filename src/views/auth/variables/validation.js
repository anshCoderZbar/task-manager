import { object, string } from "yup";

export const loginSchema = object({
  email: string()
    .required("Email is required")
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Email must be a valid email"
    ),
  password: string().required("Password is required"),
});
