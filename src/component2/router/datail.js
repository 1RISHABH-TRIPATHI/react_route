import React from 'react'
import { useLoaderData } from 'react-router-dom'

function DeTail() {
    const useDataFetch=useLoaderData();
    console.log('Call. Render Details');
  return (
    <div>
      <h1>
        Wel Come To Detail Sections
      </h1>
      <div>
        <h3>
          Id-  {useDataFetch.id} <br />
          Title-   {useDataFetch.title}
        </h3>
        <img src={useDataFetch.image} alt="" width={300}  />
        <h1>
            price- {useDataFetch.price} : Rating - {useDataFetch.rating.rate}
        </h1>
        <h4>
            {useDataFetch.category}
        </h4>
        <p>
            {useDataFetch.description}
        </p>
      </div>
    </div>
  )
}

export default DeTail

export const LOaDer = async ({params})=>{
    try {
        console.log('Call Loader Fuction ');
        const  data= await fetch(`https://fakestoreapi.com/products/${params.id}`);
        return await data.json();
    } catch (error) {
        console.log("Error Generated-: "+error);

    }
}