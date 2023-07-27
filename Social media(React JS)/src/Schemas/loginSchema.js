import * as Yup from 'yup';

export const loginSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6).required("Password is required"),
});