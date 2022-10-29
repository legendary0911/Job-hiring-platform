import React from 'react';
import Footer1 from '../footer';
import Header from '../Header';
import SideNavBar from './side_nav_bar';
import MainProfileDiv from './mainProfileDiv';

const Profile = () => {
    return (
        <div>
        <Header></Header>
        <div className="flex">
            
          <SideNavBar></SideNavBar>
          <MainProfileDiv></MainProfileDiv>
         
          
        </div>
        <Footer1></Footer1>
            
        </div>
    );
};

export default Profile;