import React from 'react'

const ProductDetailsBanner = ({productDetails}) => {
  console.log(productDetails);
  return (
    <div>
        <Image
        src={product?.attributes?.banner?.data?.attributes?.url}
        width={400}
        height={400}
        alt="banner"
        className="rounded-t-lg w-full  "
      />
    </div>
  )
}

export default ProductDetailsBanner