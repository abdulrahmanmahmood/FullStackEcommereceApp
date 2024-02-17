import Image from 'next/image'
import React from 'react'

const ProductItem = ({product}) => {
  return (
    <div className=''>
      <Image src={product?.attributes?.banner?.data?.
        attributes?.url} width={200} height={200} alt='banner'/>

    </div>
  )
}

export default ProductItem