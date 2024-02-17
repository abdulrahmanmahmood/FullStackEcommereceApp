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
      setProcuctaList(res.data.data)
    })
  }
  return (
    <div className="px-10 md:px-20 border-red-800">
      <ProductList procuctaList={procuctaList}/>
    </div>
  )
}

export default ProductSection