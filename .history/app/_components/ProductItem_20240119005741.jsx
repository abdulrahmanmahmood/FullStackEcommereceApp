import Image from "next/image";
import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="border-red-800 border-x-">
      <Image
        src={product?.attributes?.banner?.data?.attributes?.url}
        width={400}
        height={350}
        alt="banner"
        className="rounded-t-lg px-1"
      />
      <div>
        <h2>{product?.attributes?.title}</h2>
      </div>
    </div>
  );
};

export default ProductItem;
