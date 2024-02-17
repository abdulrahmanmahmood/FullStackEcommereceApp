import Image from 'next/image'
import React from 'react'

const ProductItem = ({product}) => {
  return (
    <div>
      <Image src={product.a}/>

    </div>
  )
}

export default ProductItem