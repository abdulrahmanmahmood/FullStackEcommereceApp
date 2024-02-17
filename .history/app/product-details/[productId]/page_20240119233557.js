''
import ProductsApis from "@/app/_utils/ProductsApis"
import { useEffect } from "react"

const productDetails = ({params}) => {

useEffect(()=>{

  const getProductById_ = ()=>{
    ProductsApis.getProductById(params?.productId).then(res=>{
      console.log('product item', res.data.data);
    })
  }

},[])

  return (
    <p className='text-[50px] absolute py-11'>{params.productId}</p>
  )
}

export default productDetails