import ProductsApis from "@/app/_utils/ProductsApis"

const productDetails = ({params}) => {

  const getProductById_ = ()=>{
    ProductsApis.getProductById(params?.productId).then(res=>{
      console.log('product item', res.data.data);
    })
  }

  return (
    <p className='text-[50px] absolute py-11'>{params.productId}</p>
  )
}

export default productDetails