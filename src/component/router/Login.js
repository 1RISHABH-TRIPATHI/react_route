import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const Login=()=>{
        localStorage.setItem('login',false);
        Navi('/');
    }
    const Navi=useNavigate();
    // useEffect(()=>{
    //     let login=localStorage.getItem('login');
    //     if(login){
    //             Navi('/')
    //     }
    // })
  return (
    <div>
        <h2>
            LOgin Page
        </h2>
      <input type="text" name="\" id="" /><br />
      <input type="password" name="" id="" /><br />
      <button type="button" onClick={()=>Login()} >Login </button>
    </div>
  )
}

export default Login
