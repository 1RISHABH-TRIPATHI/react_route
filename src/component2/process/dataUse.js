import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AuthData from './auth'
import DashBo from './DashBo'

export default function DataUse() {
    const [data,setData]=useState(false);
    useEffect(()=>{
        const useLogin=localStorage.getItem('data');
        useLogin?setData(true) : setData(false);
    },[]);
    useEffect(()=>{
        localStorage.setItem('data',data);
    },[data]);

    console.log(data);
  return (
    <div>
        <Routes>
           {!data &&  <Route path='/auth' element={ <AuthData  auth={()=>setData(true)}  />  }  />}
           {data &&  <Route path='/dashbo' element={<DashBo  logout={()=>setData(false)}  />} />}
           <Route path='*' element={<Navigate to={data ? 'dashbo':'auth'} />} />
        </Routes>
    </div>
  )
}
