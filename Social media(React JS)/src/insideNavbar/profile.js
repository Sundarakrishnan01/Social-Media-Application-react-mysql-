import React from "react";
import Navbar from "../login/navbar";
import './profile.css';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useSelector } from "react-redux";


export default function Profile() {

    const val = localStorage.getItem("user");
    console.log(val);

    const {user} = useSelector(state => state.master);

    return (
        <div>
            <Navbar />
            <h1>Profile</h1>

            {/* <div>

            </div> */}
            <div className="icon">
                {/* <p>Profile Picture</p> */}
                <div>

                    <img className="img" src="https://th.bing.com/th?id=OIP.YEDuC6ywRWcqLDgL5MZ7RAHaQD&w=161&h=350&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
                    
                </div>
                <div className="name">
                    <h3>{user}<VerifiedIcon style={{color:'blue'}}/></h3>
                    <h4><p>Followers</p>
                    <p>Following</p></h4>
                
                </div>
            </div>

        </div>
    );
}