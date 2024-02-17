import ProductsApis from "../_utils/ProductsApis"
import ProductList from "./ProductList"

const ProductSection = () => {
  const getLatestProducts = ()=>{
    ProductsApis.getLatestProducts().then(res=>{
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