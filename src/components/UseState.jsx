import React, { useState } from 'react'

const UseState = () => {
    const[data,setData]=useState({
        name:'',
        email:'',
        password:'',
        confirm_password:'',
    })

    const handleChange = (e) => {
        const { name, value } = e.target; 
      
        setData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
      
    
  return (
    <>
     <div className="flex justify-center items-center">
  <div className="">
  
    <div className="border-l-violet-500 border-r-orange-600 border-t-red-700 border-2 w-full h-full border-spacing-7 p-28 mt-6 ">
        <h1 className="text-4xl font-extrabold text-white ml-10">
            REJESTER
        </h1>
        <div className="p-6 w-full ">

        <input type='text' placeholder='Name'  name='name'  className='text-gray-400
         bg-slate-700 border-none w-full
        focus:outline-none font-bold font-serif
         px-4 p-2 rounded-sm hover:bg-white hover:text-black '
         value={data.name}
            onChange={handleChange} />
         

         </div>
         <div className="p-6 w-full">


        <input type='email' placeholder='Email' name='email' className='text-gray-400 bg-slate-700 border-none w-full
        focus:outline-none font-bold font-serif px-4 p-2 rounded-sm hover:bg-white hover:text-black '
        value={data.email} 
        onChange={handleChange}/ >
        </div>

          <div className="p-6 w-full">


         <input type='password' placeholder='Password' name='password' className='text-gray-400 bg-slate-700 border-none w-full
        focus:outline-none font-bold font-serif px-4 p-2 rounded-sm hover:bg-white hover:text-black' 
        value={data.password} 
        onChange={handleChange}/>
        
           </div>

        <div className="p-6 w-full">

           <input type='password' placeholder='confirm Password'  name='confirm_password' className='text-gray-400 bg-slate-700 border-none w-full
        focus:outline-none font-bold font-serif px-4 p-2 rounded-sm hover:bg-white hover:text-black'
         value={data.confirm_password}
         onChange={handleChange} / >
        </div>
        <button className="bg-black text-white font-extrabold px-4 p-2 ml-10  rounded-lg">Submit</button>
        <p className="mt-8 font-extrabold text-orange-300">{`hy i am ${data.name} my email is ${data.email} `}</p>
        </div>
      

   
    </div>
  </div>


    </>
  )
}

export default UseState
