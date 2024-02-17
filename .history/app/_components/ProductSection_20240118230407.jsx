import ProductsApis from "../_utils/ProductsApis"
import ProductList from "./ProductList"

const ProductSection = () => {
  const getLatestProducts = ()=>{
    ProductsApis
  }
  return (
    <div>
      <ProductList/>
    </div>
  )
}

export default ProductSection