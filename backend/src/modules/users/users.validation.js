import * as yup from "yup";

export const uservalidateSchema = yup.object({
  name: yup.string().required("Name is required"),
  phone_no: yup
    .string()
    .required("Phone number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  address: yup.object({
    country: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    local_address: yup.string().required(),
  }),
});
