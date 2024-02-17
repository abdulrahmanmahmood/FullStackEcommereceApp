import Image from 'next/image'
import React from 'react'

const ProductItem = ({product}) => {
  return (
    <div>
      <Image src={product?.attributes?.banner?.data?.attributes.url} width={22} height={22} />

    </div>
  )
}

export default ProductItem