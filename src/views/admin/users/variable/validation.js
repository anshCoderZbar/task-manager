import { object, string, mixed, ref } from "yup";

export const employeeValidation = object({
  userName: string().required("username is required"),
  email: string()
    .required("Email is required")
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Email must be a valid email"
    ),
  designation: string().required("designation is required"),
  phone: string()
    .required("Phone number is required")
    .min(9, "Phone number should be 9 digit minimum.")
    .max(15, "Phone number should be 15 digit maximum."),
  upload: mixed().test("avatar", "The file is too large", (value) => {
    if (!value?.length) return true;
    return value[0]?.size <= 2000000;
  }),
  joiningDate: string().required("Joining Date is required"),
  birthDate: string().required("birthDate is required"),
  bloodGroup: string().required("bloodgroup is required"),
  password: string()
    .required("Password is required")
    .matches(/^(?=.*?[A-Z])/, "Password must contains one uppercase letter")
    .matches(/^(?=.*?[a-z])/, "Password must contains lowecase letter")
    .matches(/^(?=.*?[0-9])/, "Password must contains one digit")
    .matches(/^(?! ).*[^ ]$/, "Empty spaces are not allowed")
    .matches(
      /^(?=.*?[#?!@$%^&*-])/,
      "Password must contains one special character"
    )
    .min(8, "Password is too short - should be 8 chars minimum.")
    .max(15, "Password is too long - should be 15 chars maximum."),
  confirmPassword: string()
    .required("Password is required")
    .oneOf([ref("password")], "Passwords must match"),
});
