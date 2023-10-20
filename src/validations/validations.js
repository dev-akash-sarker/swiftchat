import * as Yup from "yup";

// eslint-disable-next-line no-undef
export const registerSchema = Yup.object({
  name: Yup.string()
    .max(25, "Must be 25 characters or less")
    .required("Name can't be blank!"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email can't be blank!"),
  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .max(8, "Maximum 8 character")
    .required("Please enter password!"),
  passwordAgain: Yup.string()
    .oneOf([Yup.ref("password"), null, "Must be match"])
    .required("Please confirm password"),
});

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email can't be blank!"),
  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .max(8, "Maximum 8 character")
    .required("Please enter password!"),
});
export const forgetSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email can't be blank!"),
});
