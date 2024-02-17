'use client'
import { useEffect, useState } from "react"
import ProductsApis from "../_utils/ProductsApis"
import ProductList from "./ProductList"
import { usePathname } from 'next/navigation'
import Link from 'next/link'

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
    <div className="">
      <h2 className="text-2xl text-center py-5">Courses</h2>
<Link  href={`product-details/${params.id}`}>
<ProductList procuctaList={procuctaList}/>

</Link>
    </div>
  )
}

export default ProductSection