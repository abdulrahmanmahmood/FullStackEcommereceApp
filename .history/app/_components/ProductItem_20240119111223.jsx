import Image from "next/image";
import React from "react";

const ProductItem = ({ product }) => {
  // console.log(product?.attributes?.description?.children?);
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
        <h2 className="text-lg font-medium text-center">{product?.attributes?.title}</h2>
        {/* <p>{product?.attributes?.description?.children?.text}</p> */}
        <h2> <Image src={'/menu.png'} width={22} height={22} alt="meun"/>: {product?.attributes?.price} $</h2>
        <h2 className="flex flex-row gap-2"> <Image src={'/menu.png'} width={22} height={22} alt="meun"/> {product?.attributes?.category}</h2>
      </div>
    </div>
  );
};

export default ProductItem;
