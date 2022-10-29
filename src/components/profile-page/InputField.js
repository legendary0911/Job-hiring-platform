import React from 'react';

const InputField = (props) => {
    return (
        <div>
            <div className=' border-[0.25px] border-white my-5 py-2 px-4 flex rounded-lg bg-[#0CD1E3] '>
                <div className='w-[40%] h-fit mr-6 px-10'>
                    <p className='text-lg font-medium'>{props.title}</p>
                    <p className='text-sm'>{props.desc} </p>
                </div>
                <div className=' w-[50%]'>
               
                    <input className=' rounded-md border-white border-none h-8 my-2 w-[100%] px-4'type={props.type} placeholder={props.place} />
                </div>


            </div>
        </div>
    );
};

export default InputField;