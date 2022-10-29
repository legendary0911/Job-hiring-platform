import React from 'react';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const Upper = () => {
    return (
        <div>
        <div className='w-[60%] mt-12'>
            <div className='h-[35%]  rounded-tl-[60px] bg-white '>
                <AccountCircleRoundedIcon className='scale-[7] mt-44 ml-20'>
                </AccountCircleRoundedIcon></div>
            <div className='h-[20%]  flex'>
                <div className='text-2xl pl-44 mt-2'><span><b>Profile</b></span>
                    <p className='text-base mt-2'>Update you photo and personal details</p>


                </div>
                <div className=' flex-col h-fit lg:flex space-x-2'>
                    <button className=' rounded-2xl  h-fit w-fit px-3 py-2 bg-white text-sm hover:scale-110 absolute right-[25%] mt-4'>Cancel</button>
                    <button className=' rounded-2xl  h-fit w-fit px-3 py-2 bg-black text-white text-sm hover:scale-110 absolute right-[20%] mt-4'>Submit</button>
                </div>

            </div>
        </div>

            
        </div>
    );
};

export default Upper;