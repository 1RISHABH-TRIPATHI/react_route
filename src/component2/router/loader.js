import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

function LoadeR() {
    useEffect(()=>{
        console.log('Call UseEffect HOOK');
    },[]);
    const datA=useLoaderData();
    console.log(datA);
  return (
    <div>
      jAYB sHREEE rAM 
    </div>
  )
}

export default LoadeR
