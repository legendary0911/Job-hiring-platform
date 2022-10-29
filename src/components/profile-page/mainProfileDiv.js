import React from 'react';
import Upper from './Upper';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import InputField from './InputField';


const MainProfileDiv = () => {
    return (

        <div className='w-[60%] h-fit mt-12'>
            <div className='h-[35%]  rounded-tl-[60px] bg-white '>
                <AccountCircleRoundedIcon className='scale-[7] mt-44 ml-20'>
                </AccountCircleRoundedIcon></div>
            <div className='h-[20%] bg-[#0CD1E3]  flex'>
                <div className='text-2xl pl-44 mt-2'><span><b>Profile</b></span>
                    <p className='text-base mt-2 mb-6'>Update you photo and personal details</p>


                </div>
                <div className='flex space-x-2'>
                    <button className=' rounded-2xl  h-fit w-fit px-3 py-2 bg-white text-sm hover:scale-110 absolute right-[25%] mt-4'>Cancel</button>
                    <button className=' rounded-2xl  h-fit w-fit px-3 py-2 bg-black text-white text-sm hover:scale-110 absolute right-[20%] mt-4'>Submit</button>
                </div>

            </div>
            <InputField title="Username" type="text" desc="" place="enter your username" />
            <InputField title="Image" type="file" desc="Upload your profile picture" place="htpps://..." />
            <InputField title="Job Title" type="text" desc="" place="enter the job you do " />
            <div>
                <div className=' border-[0.25px] border-white my-5 py-2 px-4 flex rounded-lg bg-[#0CD1E3] '>
                    <div className='w-[40%] h-fit mr-6 px-10'>
                        <p className='text-lg font-medium'>Bio</p>
                        <p className='text-sm'>Write a short bio(min 100 words) </p>
                    </div>
                    <div className=' w-[50%]'>

                        <textarea cols="10" rows="10" className=' rounded-md border-white border-none h-32  w-[100%] px-4' type="text" />
                    </div>


                </div>
            </div>
           
            <InputField title="Website" type="text" desc="Enter if you have a website" place="htpps://..." />

        </div>






    );
};

export default MainProfileDiv;