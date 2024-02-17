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
      <div className='w-400 h-400 bg-slate-700'>

      </div>
      </div>
    </section>}

  
  

      <div className='w-[80%] h-[400px] bg-slate-300'>

      </div>



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