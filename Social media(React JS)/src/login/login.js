import { TextField } from "@mui/material";
import React, { useState } from "react";
import './login.css';
import Button from '@mui/material/Button';
import "./signup";
import UserService from "../Api/UserService";
import { useFormik } from "formik";
import { loginSchema } from "../Schemas/loginSchema";
import { useNavigate } from 'react-router-dom';
import { addUser } from "../Redux/MasterSlice";
import { useDispatch } from "react-redux";

function Login() {

    const navigate = useNavigate();

    const initialState = {
        email: "",
        password: "",
    };

    const dispatch = useDispatch();

    const { handleSubmit, handleChange, values, errors, handleBlur, touched } = useFormik({
        initialValues: initialState,
        validationSchema: loginSchema,
        onSubmit: (values, action) => {
            console.log(values);
            eventLogin();
            action.resetForm();
        },
    })

    const eventLogin = async () => {
        try {
            const response = await UserService.loginUser(values);
            console.log(response.message);

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", values.email);
            // localStorage.setItem("name", values.name);

            if (response.status === 200){
                dispatch(addUser(values.email));
                navigate('/home');
            }

        }
        catch (error) {
            console.log(error);
            alert("Invalid Credentials");
        }
    }


    return (
        <>
            <div style={{ display: "flex" }}>
                <div className="img1" >
                    <img className="image" src="images/download.jpg"
                        alt="Wallpaper" />
                </div>
                <div className="box">

                    <h1>Sign in</h1>
                    <form className="textLine" onSubmit={handleSubmit}>
                        <div className="hloo">
                            <TextField value={values.email} onChange={handleChange} onBlur={handleBlur} id="outlined-basic" label="email" name="email" type="text" variant="outlined" required />
                            {errors.email && touched.email ? <p className="error">{errors.email}</p> : null}
                        </div>
                        <div className="hloo">
                            <TextField value={values.password} onChange={handleChange} onBlur={handleBlur} id="outlined-basic" label="Password" name="password" type="password" variant="outlined" required />
                            {errors.password && touched.password ? <p className="error">{errors.password}</p> : null}
                        </div>
                        <div >
                            <p>New User: <a href='/signup'>Register</a></p>
                        </div>
                        {/* <div >
                            <p>Forgot Password: <a href='/resetpwd'>Reset password</a></p>
                        </div> */}
                        <div className="button">
                            <center><Button variant="contained" value="submit"
                                type="submit"
                            >
                                Sign in
                            </Button>

                            </center>
                            <br />
                        </div>

                        {/* <div className="button">
                            <center><Button variant="contained" value="submit"

                            >
                                Logout
                            </Button>

                            </center>
                        </div> */}
                    </form>



                </div>



            </div>
        </>
    );
}
export default Login;