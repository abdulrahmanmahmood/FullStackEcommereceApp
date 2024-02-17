'use client'
import { useState } from "react";
import CartApis from "../_utils/CartApis";
import ProductList from "../_components/ProductList"



const cart = () => {
  const [cartProducts , setCartProducts] = useState([])


  const getCartsProducts=()=>{
    CartApis.getCartProducts().then((res)=>{
      console.log('cart products',res.data.data)
      setCartProducts(res.data.data)
      
    })}
  return (
    <div>
      
  <ProductList procuctaList={cartProducts}/>

    </div>
  )
}

export default cart