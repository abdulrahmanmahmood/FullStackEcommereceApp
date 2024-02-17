'use client'
import { useEffect, useState } from "react"
import ProductsApis from "../_utils/ProductsApis"
import ProductList from "./ProductList"

const ProductSection = () => {
  const [procuctaList , setProcuctaList] = useState([])
  useEffect(()=>{
    getLatestProducts_();
  }, [])
  const getLatestProducts_ = ()=>{
    ProductsApis.getLatestPorducts().then(res=>{
      console.log(res.data.data);
      set
    })
  }
  return (
    <div>
      <ProductList/>
    </div>
  )
}

export default ProductSection