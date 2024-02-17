'use client'
import BreadCrumb from "@/app/_components/BreadCrumb"
import ProductDetailsBanner from "@/app/_components/ProductDetailsBanner"
import ProductInfoDetails from "@/app/_components/ProductInfoDetails"
import ProductsApis from "@/app/_utils/ProductsApis"
import { useEffect, useState } from "react"

const productDetails = ({params}) => {
  const [product, setProduct] = useState([])

useEffect(()=>{

  getProductById_()

},[params?.productId])

const getProductById_ = ()=>{
  ProductsApis.getProductById(params?.productId).then(res=>{
    console.log('product item', res.data.data);
    setProduct(res.)
  })
}

  return (
    <div className='px-10 md:px-28 py-8'>
      <BreadCrumb/>
      <div>
        <ProductDetailsBanner/>
        <ProductInfoDetails/>
      </div>

      
      </div>
  )
}

export default productDetails