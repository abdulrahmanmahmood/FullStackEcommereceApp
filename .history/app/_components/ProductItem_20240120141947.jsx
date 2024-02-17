import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductItem = ({ product }) => {
  // console.log(product?.attributes?.description?.children?);
  return (
    <Link className="block rounded-lg p-4 shadow-sm shadow-indigo-300 hover:bg-slate-300 hover:cursor-pointer" href={}>
    {product?.attributes?.banner?.data?.attributes?.url?  <Image
        src={product?.attributes?.banner?.data?.attributes?.url}
        width={400}
        height={400}
        alt="banner"
        className="rounded-t-lg w-full  "
      />:<h2>there is no image</h2> }
    
      <div className="items-center">
        <h2 className="flex-wrap  text-lg font-medium text-center">
          {product?.attributes?.title}
        </h2>
        <div className="flex flex-row justify-between pt-3">
          {/* <p>{product?.attributes?.description?.children?.text}</p> */}
          <h2 className="flex flex-row gap-2">
            {" "}
            <Image src={"/menu.png"} width={22} height={22} alt="meun" />{" "}
            {product?.attributes?.category}
          </h2>

          <h2 className="flex flex-row gap-2">
            {" "}
            <Image
              src={"/best-price.png"}
              width={22}
              height={22}
              alt="meun"
            />: {product?.attributes?.price}{" "}
            <Image
              src={"/dollar-symbol.png"}
              width={20}
              height={5}
              alt="meun"
            />
          </h2>
        </div>
        
      </div>
      
    </Link>
  );
};

export default ProductItem;
