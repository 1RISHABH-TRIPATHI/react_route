import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErRor() {
    const erroer=useRouteError();
    console.log(erroer);
  return (
    <div>
      <h3>
        Page Not Found 
      </h3>
      {erroer.status}
    </div>
  )
}

export default ErRor
