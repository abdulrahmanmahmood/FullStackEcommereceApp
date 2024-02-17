'use client'
import { useEffect, useState } from "react";
import CartApis from "../_utils/CartApis";
import ProductList from "../_components/ProductList"



const cart = () => {
  const [cartProducts , setCartProducts] = useState([])
  useEffect(()=>{
    getCartsProducts()
  },[])


  const getCartsProducts=()=>{
    CartApis.getCartProducts().then((res)=>{
      console.log('cart products',res.data.data)
      setCartProducts(res.data.data)
      
    })}
  return (
    <div>
      
      getCartsProducts
    </div>
  )
}

export default cart