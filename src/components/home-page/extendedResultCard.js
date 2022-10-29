import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';





function ExtendedResultCard(props){
  
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
        <div class="m-4 h-fit px-4 bg-white rounded-lg shadow-lg " id="extendedCard">
        <div className="heading pl-2 pt-6 flex mb-4">
          <div className="">
            <img src={props.image} alt="" className="h-14 w-14 rounded-lg mr-6 mt-6" />

          </div>
          <div className="flex flex-col w-[90%]">
            <h1 className="text-base font-semibold text-blue-500 w-fit my-6 md:px-6">
              {props.title}
            </h1>
            <h3 className="text-xs w-fit md:px-6">
              {props.description}
            </h3>

          </div>
          <div className=" relative left-0  h-20 w-20" onClick={book}>
          {
                    none?<BookmarkAddedIcon className=" scale-[2] rounded-lg  mt-8 mr-1 text-blue-500 "/>:<BookmarkAddIcon className="scale-[2] rounded-lg  mr-1 mt-8 text-gray-300"/>
                }
          </div>
        </div>

        <div className="tag  flex space-x-4 px-2 mt-8">
          <div className='bg-gray-300 rounded-md h-6 w-20 px-4 items-center'>{props.tag}</div>
          <div className='bg-gray-300 rounded-md h-6 w-20 px-4 items-center'>{props.tag}</div>
          <div className='bg-gray-300 rounded-md h-6 w-20 px-4 items-center'>{props.tag}</div>
        </div>

        <div className="heading pl-2 pt-6 flex mb-4 space-x-4">

          <div className="flex flex-col w-[90%]">
            <h1 className="text-base font-semibold text-blue-500 w-fit mb-2">
              amount you will get
            </h1>
            <h3 className="text-xs w-fit ">
              {props.amount}
            </h3>

          </div>

          <div className="flex flex-col w-[90%]">
            <h1 className="text-base font-semibold text-blue-500 w-fit mb-2 ">
              requirements
            </h1>
            <h3 className="text-xs w-fit ">
              {props.requirements}
            </h3>

          </div>

          <div className="flex flex-col w-[90%]">
            <h1 className="text-base font-semibold text-blue-500 w-fit mb-2 ">
             deadline
            </h1>
            <h3 className="text-xs w-fit ">
              {props.deadline}
            </h3>

          </div>
        </div>

        {/* submit button */}
        <div className='w-[100%] '>
        <div className='m-auto h-fit w-fit'>
        <button className='bg-blue-500 mx-6 my-2 px-6 py-2 text-white rounded-lg shadow-lg  hover:bg-blue-600  '> Submit</button>
        </div>
       
        </div>
       


        <div className="foot flex relative mt-10 mb-8 bottom-4">
          <div className="text-xs ml-2">{props.stars}</div>
          <div className='flex'>
            <img src="https://icon-library.com/images/verified-icon-png/verified-icon-png-12.jpg" className='h-4 w-4 absolute right-24'>
            </img>
            <div className="text-xs absolute right-2 ml-1 ">Verified Project</div>
          </div>

        </div>
      </div>

    )
}




export default ExtendedResultCard;