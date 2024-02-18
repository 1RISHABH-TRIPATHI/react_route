import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
function HoMme() {
  const Navigate=useNavigate();
  return (
    <div>
      <h1>
        JAY SHREE RAM 
      </h1>
      <Link to='/about' >Go to About Page </Link> <br /> <br />
      <button type="button"  onClick={()=>Navigate('/filter')} >Go To Filter Pafe</button> <br />

      <button type="button" onClick={()=>Navigate('/data')}>Go to Data Pafe</button>
    </div>
  )
}

export default HoMme
