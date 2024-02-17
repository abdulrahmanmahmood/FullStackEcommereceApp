
import React, { useState } from 'react'

const productDetails = ({params}) => {
const [product, setProduct]=useState()
  return (
    <p className='text-[50px] absolute py-11'>{params.productId}</p>
  )
}

export default productDetails