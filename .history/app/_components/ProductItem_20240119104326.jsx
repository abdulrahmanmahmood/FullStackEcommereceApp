import Image from "next/image";
import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="">
      <Image
        src={product?.attributes?.banner?.data?.attributes?.url}
        width={300}
        height={300}
        alt="banner"
        className="rounded-t-lg px-1  "
      />
      <div>
        <h2 className="text-[12px] font-medium">{product?.attributes?.title}</h2>
        <h2>{product?.attributes?.category}</h2>
        <h2>{product?.attributes?.price} $</h2>
      </div>
    </div>
  );
};

export default ProductItem;
