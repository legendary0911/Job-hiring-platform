import React from 'react';

const SideNavBar = () => {
    return (
        <div className='w-[25%]  px-9 mt-10'>
        <div className='text-4xl mb-20'><b>Settings</b></div>
        <div className='options flex-col'>
        <ul>
            <li className='font-medium bg-[#0CD1E3] rounded-md h-fit w-fit pl-3 pr-10 py-2 text-lg'>
                My Details
            </li>
            <li className='font-medium  text-lg mt-10 mb-8 hover:text-white  cursor-pointer  pl-3'>
                Profile
            </li>
            <li className='font-medium  text-lg my-8 hover:text-white    cursor-pointer  pl-3'>
                Password
            </li>
            <li className=' font-medium text-lg my-8 hover:text-white    cursor-pointer  pl-3'>
                Email
            </li>
            <li className='font-medium  text-lg mt-8 mb-24 hover:text-white    cursor-pointer  pl-3'>
                Resume
            </li>
            
            
            
        </ul>

        </div>
            
        </div>
    );
};

export default SideNavBar;