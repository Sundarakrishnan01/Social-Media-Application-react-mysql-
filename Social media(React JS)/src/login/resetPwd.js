import { TextField } from "@mui/material";
import React, { useState } from "react";
import './login.css';
import Button from '@mui/material/Button';
import "./signup";

export default function Resetpwd(){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [cnfpassword, setCnfPassword] = useState('');
    return(
        <>
            <div style={{ display: "flex" }}>
                <div  >
                    <img className="image"src="images/wallpaperflare.com_wallpaper.jpg"
                        alt="Wallpaper"  />
                </div>
                <div className="box" style={{marginTop:'8%'}}>
                

                


                    <h1>Reset Password</h1>
                    <div className="textLine" >
                        <div className="hloo">
                            <TextField onChange={n => setName(n.target.value)} id="outlined-basic" label="Name" type="text" variant="outlined" required />
                        </div>
                        <div className="hloo">
                            <TextField onChange={n => setPassword(n.target.value)} id="outlined-basic" label="New Password" type="password" variant="outlined" required />
                        </div>
                        <div className="hloo">
                            <TextField onChange={n => setCnfPassword(n.target.value)} id="outlined-basic" label="Confirm password" type="password" variant="outlined" required />
                        </div>
                        
                <div className="button">
                    <center><Button variant="contained" value="submit"
                    onClick={() => {
                        alert('clicked');
                    }}
                    >
                    Submit
                    </Button>
                    </center>
                </div>
                    </div>



                </div>



            </div>
        </>
    );
}