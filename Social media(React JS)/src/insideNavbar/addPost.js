
import React from "react";

import Navbar from "../login/navbar";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './addPost.css';
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export default function AddPost() {
    const val = localStorage.getItem("user");
    // console.log(val);
    const[message,setMessage]=useState("")
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
      };
      console.log(message);

        const handleSubmit = (e) => {
            e.preventDefault();
            const data = {
                message: message,
                email:val
            };

        const response = axios.post("http://localhost:8181/addM", data);
        alert("Post added successfully");
        console.log(response);
        };
    return (
        <div>
            <Navbar />
            <div className="d1">

                <h2>You can add your post here</h2>


                <form >
                    <TextField className="t1"
                        id="outlined-multiline-flexible"
                        onChange={handleMessageChange}
                        multiline
                        rows={4}
                        defaultValue="Type here"
                        variant="filled"
                        name='message'
                        
                    />
                    <br/>

                    <Button style={{marginTop:'3%'}}  variant="contained" type='submit' onClick={handleSubmit}>Submit</Button>
                </form>












            </div>
        </div>
    );
}

