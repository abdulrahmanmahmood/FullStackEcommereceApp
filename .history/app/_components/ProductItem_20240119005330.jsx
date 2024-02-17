import Image from 'next/image'
import React from 'react'

const ProductItem = ({product}) => {
  return (
    <div className=''>
      <Image src={product?.attributes?.banner?.data?.
        attributes?.url} width={400} height={350} alt='banner'
        className='rounded '
        />

    </div>
  )
}

export default ProductItem