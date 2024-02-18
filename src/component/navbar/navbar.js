import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBaR() {
  return (
    <div>
        
      <NavLink to='/about' > About  </NavLink> <br />
       <NavLink to='/data' >Data</NavLink> <br />
       <NavLink to='/' >Home</NavLink> <br />
       <NavLink to='/filter' >Filter</NavLink> <br />
       <NavLink to='login' >Login</NavLink> <br />
       <NavLink to='/user/perter' >perter</NavLink> <br />
       <NavLink to='/user/anil' > Anit  </NavLink> <br />
       <NavLink to='/context' > Context  </NavLink>
    </div>
  )
}

export default NavBaR
