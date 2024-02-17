import Image from "next/image";
import React from "react";

const ProductDetailsBanner = ({ productDetails }) => {
  console.log(productDetails);
  return (
    <div className="h-[400px]">
      {productDetails?.attributes?.banner?.data?.attributes?.url ? (
        <Image
          src={productDetails?.attributes?.banner?.data?.attributes?.url}
          width={400}
          height={400}
          alt="banner"
          className="rounded-t-lg w-full transition-opacity duration-500 ease-in-out "
        />
      ) : (
        <div className="w-[100%] h-[100%] bg-slate-200 animate-pulse "></div>
      )}

    </div>
  );
};

export default ProductDetailsBanner;
