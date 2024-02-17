import Image from 'next/image';
import React from 'react'

const ProductDetailsBanner = ({productDetails}) => {
  console.log(productDetails);
  return (
    <div className=''>
      {productDetails?.attributes?.banner?.data?.attributes?.url ?   <Image
        src={productDetails?.attributes?.banner?.data?.attributes?.url}
        width={400}
        height={400}
        alt="banner"
        className="rounded-t-lg w-full  "
      />: <section className="flex justify-center items-center w-full">
      <div >
        <Image
          src="/spinner.svg"
          alt="spinner"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
    </section>}

    {/* <Image
        src={productDetails?.attributes?.banner?.data?.attributes?.url}
        width={400}
        height={400}
        alt="banner"
        className="rounded-t-lg w-full  "
      /> */}
      
      <div></div>
    </div>
  )
}

export default ProductDetailsBanner