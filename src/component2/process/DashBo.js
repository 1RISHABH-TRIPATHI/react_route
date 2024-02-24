import React from 'react'
import { useNavigate } from 'react-router-dom';

function DashBo({logout}) {
    const navigate=useNavigate();
    const LOgOUT=()=>{
            logout();
            navigate('auth')
    }
  return (
    <div>
      <h1>
        This Is Dashboard page
      </h1>
      <button type="button" onClick={()=>LOgOUT()} >
        LOg OUt 
      </button>
    </div>
  )
}

export default DashBo
