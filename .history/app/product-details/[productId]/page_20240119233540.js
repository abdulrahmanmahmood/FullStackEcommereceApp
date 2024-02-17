import ProductsApis from "@/app/_utils/ProductsApis"
import { useEffect } from "react"

const productDetails = ({params}) => {

useEffect(()=>{},[])

  return (
    <p className='text-[50px] absolute py-11'>{params.productId}</p>
  )
}

export default productDetails