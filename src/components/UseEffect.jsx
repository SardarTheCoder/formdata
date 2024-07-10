import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0); 

    const add = () => {
      setCount(count + 1); 
    };
  
    const sub = () => {
      setCount(count - 1); 
    };
   
    useEffect(()=>{
        document.title=count;
    },[count])
  
    return (
      <>
        <div className="flex p-5 justify-center gap-11">
          <button className="p-2 bg-red-800 text-white" onClick={add}>+</button>
          <h1 className="text-4xl text-white">{count}</h1>
          <button className="p-2 bg-red-800 text-white" onClick={sub}>-</button>
        </div>
      </>
    );
  };
export default UseEffect
