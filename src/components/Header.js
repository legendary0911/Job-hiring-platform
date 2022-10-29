import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='mb-28'>

            <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed h-22 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 ">
                <div class="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to='/' class="flex items-center">
                        
                            <span class=" self-center text-xl font-semibold whitespace-nowrap dark:text-white">Backbenchers</span>
                    </Link>
                    <div class="flex md:order-2">

                        <button data-collapse-toggle="navbar-sticky" type="button" class=" z-30 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to='/' class="text-base block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-400 md:p-0 dark:text-white hover:text-gray-100" >Home</Link>
                            </li>
                            <li>
                                <Link to='/login' class="text-base block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sign In</Link>
                            </li>
                            
                            <li>
                                <Link to='/contact' class="text-base block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header;