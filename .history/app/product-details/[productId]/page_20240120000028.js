'use client'
import BreadCrumb from "@/app/_components/BreadCrumb"
import ProductsApis from "@/app/_utils/ProductsApis"
import { useEffect } from "react"

const productDetails = ({params}) => {

useEffect(()=>{

  getProductById_()

},[params?.productId])

const getProductById_ = ()=>{
  ProductsApis.getProductById(params?.productId).then(res=>{
    console.log('product item', res.data.data);
  })
}

  return (
    <p className=''>
      <BreadCrumb/>

      {params.productId}
      
      </p>
  )
}

export default productDetails