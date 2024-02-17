import { useState } from "react";
import CartApis from "../_utils/CartApis";


const cart = () => {
  const [procuctaList , setProcuctaList] = useState([])


  const getCartsProducts=()=>{
    CartApis.getCartProducts().then((res)=>{
      console.log('cart products',res.data.data)
      setProcuctaList(res.data.data)
      
    })}
  return (
    <div>cart</div>
  )
}

export default cart