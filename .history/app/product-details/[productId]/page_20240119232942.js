'use client'
import React, { useEffect, useState } from 'react'

const productDetails = ({params}) => {
  useEffect(()=>{
    getProductById()
  },[])
const [product, setProduct]=useState([])
  return (
    <p className='text-[50px] absolute py-11'>{params.productId}</p>
  )
}

export default productDetails