import Image from "next/image";
import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="block rounded-lg p-4 shadow-sm shadow-indigo-300">
      <Image
        src={product?.attributes?.banner?.data?.attributes?.url}
        width={400}
        height={400}
        alt="banner"
        className="rounded-t-lg w-full  "
      />
      <div>
        <h2 className="text-xl font-medium text-center">{product?.attributes?.title}</h2>
        <p>{product?.attributes?.description?.0?.children?.text}</p>
        <h2>{product?.attributes?.price} $</h2>
      </div>
    </div>
  );
};

export default ProductItem;
