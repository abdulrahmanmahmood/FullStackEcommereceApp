'use client'
import BreadCrumb from "@/app/_components/BreadCrumb"
import ProductDetailsBanner from "@/app/_components/ProductDetailsBanner"
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
    <div className='px-10 md:px-28 py-8'>
      <BreadCrumb/>
      <div>
        <ProductDetailsBanner/>
        <Product
      </div>

      
      </div>
  )
}

export default productDetails