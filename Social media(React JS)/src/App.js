import logo from './logo.svg';
import './App.css';
import Login from './login/login';
import Signup from './login/signup';
import Resetpwd from './login/resetPwd';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Navbar from './login/navbar';
import MediaCard from './insideNavbar/Home';
import AddPost from './insideNavbar/addPost';
import Message from './insideNavbar/message';
import SearchBar from './insideNavbar/search';
import Followers from './insideNavbar/followers';
import Following from './insideNavbar/following';
import Profile from './insideNavbar/profile';
import Table from './login/table';
import { Feedbacks } from './insideNavbar/feedback';


function App() {
  return (
  
    
      
    <div className="App">
      
        
         <Routes>
          <Route path="/" element ={<Login/>}></Route>
          <Route path="/login" element ={<Login/>}></Route>
          <Route path="/signup" element ={<Signup/>}></Route>
          <Route path="/resetpwd" element ={<Resetpwd/>}></Route>
          <Route path="/navbar" element={<Navbar/>}></Route>
          <Route path="/home" element={<MediaCard/>}></Route>
          <Route path="/addpost" element={<AddPost/>}></Route>
          <Route path="/message" element={<Message/>}></Route>
          <Route path="/search" element={<SearchBar/>}></Route>
          <Route path="/followers" element={<Followers/>}></Route>
          <Route path="/following" element={<Following/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/table" element={<Table/>}></Route>
          <Route path="/feedback" element={<Feedbacks/>}></Route>
          
          


        </Routes> 
        </div>
      
   
  );
}

export default App;
