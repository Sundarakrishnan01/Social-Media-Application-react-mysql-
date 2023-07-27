import React from 'react';
import './sideBar.css';
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';


const Sidebar = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <div className="sidebar">
      <div className="menu-icon">&#9776;</div>
      <ul>
        <li>
          <Button variant="contained" value="submit"
            onClick={() =>
              logout()

            }
          >
            Logout
          </Button>


        </li>
        <li>Home</li>
        <li>Profile</li>
        <li>Messages</li>
        {/* Add more sidebar items */}
      </ul>
    </div>
  );
}

export default Sidebar;
