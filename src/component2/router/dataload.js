import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoadeR from './loader'
import DeTail,{LOaDer as Details} from './datail';
import ErRor from './error';

function DataKLoad() {
    const router=createBrowserRouter([
        {
            path:'/',
            element:<LoadeR />,
            loader: async ({request,respone})=>{
                    console.log("Router Loasder Function ");
                    const data=await fetch('https://fakestoreapi.com/products');
                    return data.json();
            },
        },
        {
            path:'/:id',
            element:<DeTail />,
            loader: Details,
            errorElement:<ErRor />
        }
    ]);
    console.log('Render Component ');
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default DataKLoad
    