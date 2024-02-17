'use client'
import { useEffect } from "react"
import ProductsApis from "../_utils/ProductsApis"
import ProductList from "./ProductList"

const ProductSection = () => {
  const [data , setdata] = useSTate
  useEffect(()=>{
    getLatestProducts_();
  }, [])
  const getLatestProducts_ = ()=>{
    ProductsApis.getLatestPorducts().then(res=>{
      console.log(res.data);
    })
  }
  return (
    <div>
      <ProductList/>
    </div>
  )
}

export default ProductSection