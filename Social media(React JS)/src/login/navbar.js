import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import TelegramIcon from '@mui/icons-material/Telegram';

import React from "react";
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Button from '@mui/material/Button';
import searchBar from '../insideNavbar/search';

import Drawer from './Drawer';
import Header from './header';



export default function Navbar() {
    const navigate = useNavigate();
    const [value, setValue] = React.useState(0);
    return (
        <div>
            <div className='header'>
                <Header />
            </div>

            <div className='avathar'>
                {/* <Avatar
                    sx={{ bgcolor: deepOrange[500] }}
                    alt="Remy Sharp"
                    src="/broken-image.jpg"
                >
                    SU
                </Avatar> */}

            </div>
            {/* <BrowserRouter>
        </BrowserRouter> */}
            <div className='nav'>

                <BottomNavigation style={{ marginTop: '20%',backgroundColor: 'bisque' }}
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >

                    <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={() => navigate('/home')} />
                    <BottomNavigationAction label="Add Post" icon={<AddIcon />} onClick={(value = { value }) => navigate('/addpost')} />
                    {/* <BottomNavigationAction label="Message" icon={<TelegramIcon />} onClick={(value = { value }) => navigate('/message')} /> */}
                    <BottomNavigationAction label="Search" icon={<PersonSearchIcon />} onClick={(value = { value }) => navigate('/search ')} />
                    <BottomNavigationAction label="Share Location" href="https://maps.google.co.in" target='_blank' icon={<LocationOnIcon />} ></BottomNavigationAction>
                    {/* <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} /> */}


                </BottomNavigation>
            </div>


        </div>

    );
}