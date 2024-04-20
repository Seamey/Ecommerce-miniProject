// import { baseApi } from '@/constants/baseApi'
// import UpdateProductForm from '@/components/forms/UpdateForm'
// import React from 'react'
// import ProductsUpdate from '@/types/TypeUpate'
// type Props = {
// 	params:{
// 		id:number
// 	},
	
// }


// // export const getData=async(id:number )=>
// // {
// //   const data=await fetch(`${baseApi}products/${id}/`)
// //   const respone= await data.json()
// //   console.log(respone)
// //   return respone.results;
// // }

// export default async function page(props:ProductsUpdate) {
//    const getData=async(id:number )=>
//     {
//       const data=await fetch(`${baseApi}products/${id}/`)
//       const respone= await data.json()
//       console.log(respone)
//       return respone.results;
//     }
//   const data = await getData(props.id)
//   console.log(data)
//   return (
// 	<div>
//       <UpdateProductForm 
//         category={data.category.name}
//         price={data.price}
//         desc={data.desc}
//         name={data.name}
//         quantity={data.quantity}
//         image={data.image}
//         id={data.id}
//         seller={data.seller}
//       />
// 	</div>
//   )
// }

import { baseApi } from '@/constants/baseApi'
import UpdateProductForm from '@/components/forms/UpdateForm'
import React from 'react'
import { Products } from '@/types/products'

type Props = {
  params:{
    id:number
  },
  
}
const getData=async(props:Products)=>
{
  const data=await fetch(`${baseApi}products/${props.id}/`)
  const respone= await data.json()
  console.log(respone)
  return respone.results;
}
export default async function page(props:any) {
  const data= await getData(props.id)
  console.log(data)
  return (
  <>
      <UpdateProductForm 
        category={data.category.name}
        price={data.price}
        desc={data.desc}
        name={data.name}
        quantity={data.quantity}
        image={data.image}
        id={data.id}
        seller={data.seller}
      />
  </>
  )
}