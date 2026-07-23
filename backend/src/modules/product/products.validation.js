import * as yup from "yup";

export const productvalidateSchema = yup.object({
  products: yup.array().of(yup.string()).required("Products are required"),

  qty: yup
    .number()
    .required("Quantity is required")
    .positive("Quantity must be positive")
    .integer("Quantity must be an integer"),

  is_available: yup
    .string()
    .oneOf(["Available", "Not available"])
    .required("Availability is required"),
});
