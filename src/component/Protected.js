import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Protected(props) {
    const {Component}=props
    const Navi=useNavigate();
    useEffect(()=>{
        let login=localStorage.getItem('login');
        if(!login){
                Navi('/login')
        }
    })
  return (
    <div>
      
      <Component />
    </div>
  )
}

export default Protected
