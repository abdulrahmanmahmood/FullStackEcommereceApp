'use client'
import BreadCrumb from "@/app/_components/BreadCrumb"
import ProductDetailsBanner from "@/app/_components/ProductDetailsBanner"
import ProductInfoDetails from "@/app/_components/ProductInfoDetails"
import ProductList from "@/app/_components/ProductList"
import ProductsApis from "@/app/_utils/ProductsApis"
import { useEffect, useState } from "react"

const productDetails = ({params}) => {
  const [productDetails, setProductDetails] = useState({})
  const[semilarProduct, setSemilarProduct] = useState([])

useEffect(()=>{

  getProductById_()

},[params?.productId])

const getProductById_ = ()=>{
  ProductsApis.getProductById(params?.productId).then(res=>{
    console.log('product item', res.data.data);
    setProductDetails(res.data.data)
    console.log('product' , productDetails);

    getSimelarProductsInCat('category','Programming')
  })
}
const getSimelarProductsInCat=(catt, cat)=>{
  ProductsApis.getSimelarBroducts(catt,cat).then(res=>{
    console.log('etsn>>',res.data?.data);

    setSemilarProduct(res?.data?.data)

    console.log('semeilarProducts=', semilarProduct);
  })
}

  return (
    <div className='py-8 px-5'>
      <BreadCrumb/>
      <div className=" py-5 grid grid-clos-1 sm:grid-cols-2 sm:gap-7  ">
        <ProductDetailsBanner productDetails={productDetails}/>
        <ProductInfoDetails productDetails={productDetails}/>
      </div>


      <ProductList

      
      </div>
  )
}

export default productDetails