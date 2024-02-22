import React from 'react'
import { useParams } from 'react-router-dom';

function UseR() {
    const params=useParams();
    const {name}=params;
    console.log(params);
  return (
    <div>
      <h3>
        Wel To {name}
      </h3>
    </div>
  )
}

export default UseR
