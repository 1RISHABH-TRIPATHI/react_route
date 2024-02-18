import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function ConText() {
  return (
    <div>
      <h2>
        Wel come to COnText
      </h2>
      <p>
         <Link to='company' >Company</Link> <br />
         <Link to='otherpage' >Other Page </Link> <br />
         <Link to='chenal' >chenal</Link>
            <Outlet />
      </p>
    </div>
  )
}

export default ConText
