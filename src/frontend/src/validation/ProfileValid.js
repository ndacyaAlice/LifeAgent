import * as Yup from "yup";

export const ProfileValid = Yup.object().shape({
    Username: Yup
    .string()
    .required()
    .min(6, "min 6 characters"),

    Gender: Yup
    .string()
    .required()
    .min(4, "must be male or female"),

    Age: Yup.number()
    .required()
    .typeError('The value must be a number')
    .min(10, "min is 2 digits")  // Ensures at least 2 digits
    .max(999, "max is 3 digits"),
    
    Weight: Yup.number()
  .required()
  .typeError('The value must be a number')
  .min(10, "min is 2 digits")  // Ensures at least 2 digits
  .max(999, "max is 3 digits"),
    
    Height : Yup.number()
    .required()
    .typeError('The value must be a number')
    .min(10, "min is 2 digits")  // Ensures at least 2 digits
    .max(999, "max is 3 digits"),
});
