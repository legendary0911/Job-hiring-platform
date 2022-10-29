/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

function JobResultCard1(props) {
    
    const [none,setbookmark]=useState(null);
    const book=() =>{
        if (none===null){
            setbookmark("hii")
        }
        else{
            setbookmark(null)
        }
    }

    return (
        <div >
        <div className="job-post-div m-3 h-fit rounded-md px-3 bg-white shadow-xl " >
            <div className="heading pl-2 pt-6 flex ">
                <div className="mr-6">
                    <img src={props.img} alt="" className="h-14 w-18 rounded-lg mr-6" />

                </div>
                <div className="flex flex-col mr-[10%]">
                    <h1 className="text-base font-semibold hover:text-blue-500 hover:underline cursor-pointer w-fit">
                        {props.title}
                    </h1>
                    <h3 className="text-xs w-fit">
                        {props.description}
                    </h3>

                </div>
                <div className=" relative left-0" onClick={book}>
                {
                    none?<BookmarkAddedIcon className="scale-[1.4] rounded-lg  mr-1 text-blue-500"/>:<BookmarkAddIcon className="scale-[1.4] rounded-lg  mr-1 text-gray-300"/>
                }
                    
                    
                        
                    
                    
                </div>
            </div>
            <div className="tag mt-6 mb-3 mx-1">
            <div className='bg-gray-300 rounded-md text-xs h-6 w-12 px-3 items-center'>{props.tag}</div>
            </div>
            <div className="foot flex relative mt-10 mb-5 bottom-4">
                <div className="text-xs ml-2">{props.star}</div> 
                <div className='flex'>
                    <img src="https://icon-library.com/images/verified-icon-png/verified-icon-png-12.jpg" className='h-4 w-4 absolute right-24'>
                    </img>
                    <div className="text-xs absolute right-2 ml-1 ">Verified Project</div>
                </div>
                
            </div>
        </div>
        </div>
    )
};

export default JobResultCard1;
