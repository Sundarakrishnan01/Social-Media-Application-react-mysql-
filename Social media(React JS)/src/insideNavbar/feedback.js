import React from 'react'
import { Button } from '@mui/material'
import UserService from '../Api/UserService'
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import './feedback.css';
import Navbar from '../login/navbar';

export const Feedbacks = () => {

    const initialState = {
        name: "",
        email: "",
        comment: ""
    }

    const [data, setData] = useState(initialState);

    const eventSubmit = async () => {
        console.log(data);
        try {
            const response = await UserService.addFeedback(data);
            console.log(response.data);
        }
        catch (err) {
            console.log(err);
        }

    }

    const eventChange = (e) => {
        setData({...data, [e.target.name] : e.target.value});
    }

    return (
        <div>
            <Navbar/>
            <h1 style={{paddingBottom:'0 %'}}>Feedback</h1>
            <div className='feedback1'>
                <br/>
                <br/>
            <TextField className='feed1' style={{paddingTop:'0%'}}
          required
          id="outlined-required"
          label="Name"
          
        >
            <input name="name" onChange={eventChange} value={data.name}/></TextField>
            <br/>
            <TextField className='feed1'
          required
          type='email'
          id="outlined-required"
          label="email"
          
        >
            <input name="email" onChange={eventChange} value={data.email}/></TextField>
            <br/>
            <TextField className='feed1'
            
          id="outlined-multiline-static"
          label="Feedback"
          multiline
          rows={4}
          defaultValue=""
        >
            <input name="comment" onChange={eventChange} value={data.comment}/></TextField> <br/>
            <Button onClick={eventSubmit}>Submit</Button><br/>
            </div>
        </div>
    )
}
