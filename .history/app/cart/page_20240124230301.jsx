import React from 'react'

const cart = () => {

  const getCartsProducts=()=>{
    CartApis.getCartProducts().then((res)=>{
      // console.log('cart products',res.data.data)
      // setProductsNumber(res.data.data)
    })}
  return (
    <div>cart</div>
  )
}

export default cart