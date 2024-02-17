'use client'
import BreadCrumb from "../../_components/BreadCrumb"
import ProductDetailsBanner from "../../_components/ProductDetailsBanner"
import ProductInfoDetails from "../../_components/ProductInfoDetails"
import ProductList from "../../_components/ProductList"
import ProductsApis from "../../_utils/ProductsApis"
import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation'


const productDetails = ({params}) => {
  const [productDetails, setProductDetails] = useState({})
  const[semilarProduct, setSemilarProduct] = useState([])
  const pathname=usePathname()

useEffect(()=>{
  window.scrollTo(0, 0);
  getProductById_()

},[params?.productId])

const getProductById_ = ()=>{
  ProductsApis.getProductById(params?.productId).then(res=>{
    console.log('product item', res.data.data);
    setProductDetails(res.data.data)

    getSimelarProductsInCat('category',res.data.data?.attributes?.category)
  })
}
const getSimelarProductsInCat=(catt, cat)=>{
  ProductsApis.getSimelarBroducts(catt,cat).then(res=>{
    console.log('etsn>>',res.data?.data);
    setSemilarProduct(res?.data?.data)
  })
}

  return (
    <div className='py-8 px-5'>
      <BreadCrumb pathname={pathname} productDetails={productDetails}/>
      <div className=" py-5 grid grid-clos-1 sm:grid-cols-2 md:gap-7 gap- ">
        <ProductDetailsBanner productDetails={productDetails}/>
        <ProductInfoDetails productDetails={productDetails}/>
      </div>
      <h2 className="text-2xl text-center py-6">Semilar Products</h2>


      <ProductList  procuctaList={semilarProduct} />

      
      </div>
  )
}

export default productDetails