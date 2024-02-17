import Image from "next/image";
import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="p-3 border-red-800 border-y-2 border-x-2">
      <Image
        src={product?.attributes?.banner?.data?.attributes?.url}
        width={400}
        height={350}
        alt="banner"
        className="rounded-t-lg px-1 h-[170px] object-fit"
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
