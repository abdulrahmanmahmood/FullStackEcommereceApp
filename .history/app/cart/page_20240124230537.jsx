import { useState } from "react";
import CartApis from "../_utils/CartApis";
import ProductList from "./ProductList"



const cart = () => {
  const [CArtprocuctaList , setProcuctaList] = useState([])


  const getCartsProducts=()=>{
    CartApis.getCartProducts().then((res)=>{
      console.log('cart products',res.data.data)
      setProcuctaList(res.data.data)
      
    })}
  return (
    <div>
      
  <ProductList procuctaList={procuctaList}/>

    </div>
  )
}

export default cart