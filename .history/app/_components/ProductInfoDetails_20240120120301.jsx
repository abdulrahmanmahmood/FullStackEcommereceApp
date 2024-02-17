import Image from "next/image";
import React from "react";

const ProductInfoDetails = ({ productDetails }) => {
  return (
    <div className="  ">
      <div className="items-center pt-5">
        <h2 className="flex-wrap font-medium text-center text-2xl">
          {productDetails?.attributes?.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4  w-[80%]  pt-11 outline-dashed  ">
          <h2 className="flex flex-row gap-2">
            {" "}
            <Image src={"/menu.png"} width={22} height={22} alt="meun" />{" "}
            {productDetails?.attributes?.category}
          </h2>

          <h2 className="flex flex-row gap-2">
            {" "}
            <Image
              src={"/best-price.png"}
              width={22}
              height={22}
              alt="meun"
            />: {productDetails?.attributes?.price}{" "}
            <Image
              src={"/dollar-symbol.png"}
              width={20}
              height={5}
              alt="meun"
            />
          </h2>
        </div>
        
      
      </div>
      <p className="w-[85%] mx-auto pt-11 text-justify">
            {productDetails?.attributes?.description[0]?.children[0]?.text}
          </p>
    </div>
  );
};

export default ProductInfoDetails;
