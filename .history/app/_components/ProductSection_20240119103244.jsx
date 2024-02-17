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
    <div className="pt-[-50px]">
      <ProductList procuctaList={procuctaList}/>
    </div>
  )
}

export default ProductSection