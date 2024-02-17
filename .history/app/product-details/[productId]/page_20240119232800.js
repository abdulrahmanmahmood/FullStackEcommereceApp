import React from 'react'

const productDetails = ({params}) => {
  getProductById()
  return (
    <p className='text-[50px] absolute py-11'>{params.productId}</p>
  )
}

export default productDetails