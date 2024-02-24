import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function AuthData({auth}) {
    const navigate=useNavigate();
    const LoginData=()=>{
        auth();
        navigate('dashbo')
    }
  return (
    <div>
      <h1>
        This Is Auth page
      </h1>
      <button type="button" onClick={()=>LoginData()} >
        Login
      </button>
    </div>
  )
}
