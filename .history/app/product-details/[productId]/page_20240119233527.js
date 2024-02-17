import ProductsApis from "@/app/_utils/ProductsApis"

const productDetails = ({params}) => {



  return (
    <p className='text-[50px] absolute py-11'>{params.productId}</p>
  )
}

export default productDetails