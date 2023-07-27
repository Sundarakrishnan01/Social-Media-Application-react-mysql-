import React from "react";
import Navbar from "../login/navbar";
import './following.css';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@mui/material";


export default function Following() {
    return (
        <div>
            <Navbar />

            <div>

                <h1>Following</h1>
            </div>
            <div className="boxi">
                <Avatar />
                Name 1
                <Button>

                    <DeleteIcon />
                </Button>
            </div>
            <div className="boxi">
                <Avatar />
                Name 2
                <Button>

                    <DeleteIcon />
                </Button>
            </div>
            <div className="boxi">
                <Avatar />
                Name 3
                <Button>

                    <DeleteIcon />
                </Button>
            </div>
            <div className="boxi">
                <Avatar />
                Name 4
                <Button>

                    <DeleteIcon />
                </Button>
            </div>
            <div style={{ paddingBottom: '6%' }}>

            </div>
        </div>
    );
}