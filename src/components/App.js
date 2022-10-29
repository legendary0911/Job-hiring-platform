import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Footer1 from "./footer";
import Header from "./Header";
import JobResultCard1 from "./home-page/jobResultCard";
import ProfileDiv from "./home-page/profileDiv";
import SearchDiv from "./home-page/searchDiv";
import jobDetails from '../details';
import SearchBar from './home-page/searchBar';
import {BrowserRouter,Routes,Switch,Route,Outlet} from 'react-router-dom'
import Home from './home-page/Home';
import LoginForm from './signIn-page/login-form';
import Contact from './contact-page/contact';
import Profile from './profile-page/profile';










function App() {



  return (
    
    
      <BrowserRouter>
      
      <Routes>
      
      <Route path="/"  element={<Home/>}/>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/profile" element={<Profile/>}/>
      </Routes>
      
      
      </BrowserRouter>
      
    
   

   
  );
}

export default App;
