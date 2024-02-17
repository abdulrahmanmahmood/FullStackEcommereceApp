import Image from "next/image";
import React from "react";

const ProductDetailsBanner = ({ productDetails }) => {
  console.log(productDetails);
  return (
    <div className="">
      {productDetails?.attributes?.banner?.data?.attributes?.url ? (
        <Image
          src={productDetails?.attributes?.banner?.data?.attributes?.url}
          width={400}
          height={400}
          alt="banner"
          className="rounded-t-lg w-full  "
        />
      ) : (
        <div className="w-[100%] h-[400px] bg-slate-200 ani"></div>
      )}

    </div>
  );
};

export default ProductDetailsBanner;
