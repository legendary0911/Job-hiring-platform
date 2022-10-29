/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function ProfileDiv() {
    return (
    <div className="w-[100%] lg:w-1/5 hidden lg:inline">
        <div className="px-2 py-4">
            <div
                className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-xl text-black">
                <div className="flex justify-end px-4 pt-4">



                </div>
                <div className="flex flex-col items-center pb-10">

                    <AccountCircleIcon className=" mb-10 mt-6 scale-[4] rounded-full shadow-lg" alt="Shivam image"/>

                    <h5 className="mb-1 text-lg font-medium text-gray-900">
                        Kumar Shivam
                    </h5>

                    <span className="text-sm text-gray-500 dark:text-gray-400">Web Developer</span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <Link to='/profile' href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Edit Profile 
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    </div>)
};

export default ProfileDiv;