import { TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import './login.css';
import Button from '@mui/material/Button';
import "./signup";
import { registrationSchema } from "../Schemas/registrationSchema";
import UserService from "../Api/UserService";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';


function Signup() {


    const navigate = useNavigate();

    const initialState = {
        name: "",
        email: "",
        password: "",
        cnfpassword: "",
    };


    const { handleSubmit, handleChange, values, errors, handleBlur, touched } = useFormik({
        initialValues: initialState,
        validationSchema: registrationSchema,
        onSubmit: (values, action) => {
            console.log(values);
            eventRegister();
            action.resetForm();
        },
    })

    const eventRegister = async () => {
        try{
            const response = await UserService.addUser(values);
            console.log(response)
            navigate('/login');
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <>
            <div style={{ display: "flex", }}>
                <div  >
                    <img className="image" src="images/wallpaperflare.com_wallpaper.jpg"
                        alt="Wallpaper" />
                </div>
                <div className="box" style={{ marginTop: '8%' }}>
                    <h1 className="reg">Register</h1>
                    <form className="textLine" onSubmit={handleSubmit}>
                        <div className="hloo1">
                            <TextField value={values.name} onChange={handleChange} onBlur={handleBlur} name="name" id="outlined-basic" label="Name" type="text" variant="outlined" required />
                            {errors.name && touched.name ? <p className="error">{errors.name}</p> : null }
                        </div>
                        <div className="hloo1">
                            <TextField value={values.email} onChange={handleChange}  onBlur={handleBlur} name="email" id="outlined-basic" label="Email" type="email" variant="outlined" required />
                            {errors.email && touched.email ? <p className="error">{errors.email}</p> : null }
                        </div>
                        <div className="hloo1">
                            <TextField value={values.password} onChange={handleChange}  onBlur={handleBlur} name="password" id="outlined-basic" label="Password" type="password" variant="outlined" required />
                            {errors.password && touched.password ? <p className="error">{errors.password}</p> : null }
                        </div>
                        <div className="hloo1">
                            <TextField value={values.cnfpassword} onChange={handleChange}  onBlur={handleBlur} name="cnfpassword" id="outlined-basic" label="Confirm Password" type="password" variant="outlined" required />
                            {errors.cnfpassword && touched.cnfpassword ? <p className="error">{errors.cnfpassword}</p> : null }
                        </div>

                        <div >
                            <p>Have an account: <a href='/'>Log in</a></p>
                        </div>

                        <div className="button" style={{paddingBottom:'2px',paddingTop:'10%'}}>
                            <center><Button variant="contained" value="submit"
                               type="submit"
                            >
                                Submit
                            </Button>
                            </center>
                        </div>
                    </form>



                </div>



            </div>
        </>
    );
}
export default Signup;