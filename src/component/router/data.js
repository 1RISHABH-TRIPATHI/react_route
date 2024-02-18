import React from 'react'
import { useLocation } from 'react-router-dom'


function DatA() {
   const location=useLocation();
   console.log(location);
  return (
    <div>
       <h2>
        Jay Shree Ram Data
      </h2>
    </div>
  )
}

export default DatA
