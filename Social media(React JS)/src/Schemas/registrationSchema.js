import * as Yup from 'yup';

export const registrationSchema = Yup.object({
    name: Yup.string().min(7).max(25).required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6).required("Password is required"),
    cnfpassword: Yup.string().oneOf([Yup.ref('password'), null], "password must match").required("Confirm Password is required"),
});