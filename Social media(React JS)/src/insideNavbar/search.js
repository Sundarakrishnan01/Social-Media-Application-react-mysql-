import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Navbar from '../login/navbar';
import Drawer from '../login/Drawer';
import Header from '../login/header';
import { useState } from 'react';
import UserService from '../Api/UserService';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchBar() {
  const navigate = useNavigate('');
  const initialState = {
    
    email: ""
    
}

  const [attri, setData] = useState(initialState);

  const eventSubmit = async () => {
      console.log(attri);
      
      try {
          const response = await UserService.getSearchedUser(attri);
          console.log(response.attri);
      }
      catch (err) {
          console.log(err);
      }

  }
    const eventChange = (e) => {
      setData({...attri, [e.target.name] : e.target.value});
  }
  return (<div>
    <Navbar/>
    <div style={{marginTop:'5%',width:'24%',marginLeft:'38%',}}>
      <AppBar position="static" style={{color:'black',backgroundColor:'white',alignItems:'center',}}>
        <Toolbar>
          
          
          <Search >
            <SearchIconWrapper style={{color:'blue'}}>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              name="email" onChange={eventChange} value={attri.email}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Button onClick={eventSubmit}>Search</Button><br/>
      </div>
    
    {/* <Header/> */}
    </div>
  );
}