import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Footer1 from '../footer';
import Header from '../Header';

import LoginCard from './LoginCard';
import SignupCard from './SignupCard';

function LoginForm(){

  const [user,setuser]=useState(null);
  const handleClick=()=>{
    if (user===null){
      setuser("hii")
  }
  else{
      setuser(null)
  }
  }
    return(
      
      <div>
      <Header></Header>
        <div class="lg:flex">

      {/* <!-- img div --> */}
      <div class=" left  w-[100%] lg:w-1/2">
        <img class=" lg:w-[100%] lg:h-[100%] w-[75%] mx-auto " src="https://i.pinimg.com/originals/fd/01/6e/fd016ea5019cafacc5c67b50e48e311f.jpg" alt="this is a doodle art" />
      </div>


       {/* <!-- side div --> */}
      <div class="flex  bg-[#76f2fe] w-[100%] lg:w-1/2 justify-center ">
      {user?<SignupCard on={handleClick}/>:<LoginCard on={handleClick} />}
     

        {/* <!-- card div --> */}
       
      </div>
    </div>
    <Footer1/>
    </div>

    )
}
export default LoginForm;
