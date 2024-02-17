'use client'
import BreadCrumb from "@/app/_components/BreadCrumb"
import ProductDetailsBanner from "@/app/_components/ProductDetailsBanner"
import ProductInfoDetails from "@/app/_components/ProductInfoDetails"
import ProductsApis from "@/app/_utils/ProductsApis"
import { useEffect, useState } from "react"

const productDetails = ({params}) => {
  const [productDetails, setProductDetails] = useState({})

useEffect(()=>{

  getProductById_()

},[params?.productId])

const getProductById_ = ()=>{
  ProductsApis.getProductById(params?.productId).then(res=>{
    console.log('product item', res.data.data);
    setProductDetails(res.data.data)
    console.log('product' , productDetails);
  })
}

  return (
    <div className='py-8'>
      <BreadCrumb/>
      <div className="px-2 py-5 grid grid-clos-1 sm:grid-cols-2 sm:gap-1  outline-dashed ">
        <ProductDetailsBanner productDetails={productDetails}/>
        <ProductInfoDetails productDetails={productDetails}/>
      </div>
      

      
      </div>
  )
}

export default productDetails