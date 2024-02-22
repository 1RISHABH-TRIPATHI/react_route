import React from 'react'
import { useLocation } from 'react-router-dom'
function ComPanY() {
 
  
  const location=useLocation();
  console.log(location);
  return (
    <div>
      <h2>
        Wel Come To Commapu 
      </h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quam id accusamus facere necessitatibus debitis saepe quos! Tempora doloribus a fugiat recusandae voluptatum itaque! Impedit rerum animi repudiandae et blanditiis?
      </p>
    </div>
  )
}

export default ComPanY
