import { useState } from "react";
import CartApis from "../_utils/CartApis";
import ProductList from "./ProductList"



const cart = () => {
  const [cartProducts , setCartProcucts] = useState([])


  const getCartsProducts=()=>{
    CartApis.getCartProducts().then((res)=>{
      console.log('cart products',res.data.data)
      setCartProcucts(res.data.data)
      
    })}
  return (
    <div>
      
  <ProductList procuctaList={procuctaList}/>

    </div>
  )
}

export default cart