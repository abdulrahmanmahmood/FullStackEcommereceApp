import Image from 'next/image';
import React from 'react'

const ProductDetailsBanner = ({productDetails}) => {
  console.log(productDetails);
  return (
    <div className='outline-dashed'>
        <Image
        src={productDetails?.attributes?.banner?.data?.attributes?.url}
        width={400}
        height={400}
        alt="banner"
        className="rounded-t-lg w-full  "
      />
    </div>
  )
}

export default ProductDetailsBanner