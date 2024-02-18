import React from 'react'
import { useSearchParams } from 'react-router-dom'

function FilTer() {
    const [searchParams,setSearchparams] = useSearchParams();
    console.log(searchParams.get('age'));
  return (
    <div>
      <h3>
        Wel Filter 
      </h3>
      <h1>
        {searchParams.get('age')}
      </h1>
    </div>
  )
}

export default FilTer
