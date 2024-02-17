import Image from "next/image";
import React from "react";

const ProductInfoDetails = ({ productDetails }) => {
  return (
    <div className="outline-double outline-red-700">
      <div className="items-center ">
        <h2 className="flex-wrap  text-lg font-medium text-center">
          {productDetails?.attributes?.title}
        </h2>
        <div className="flex flex-row justify-between pt-3 outl">
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
        
          <p className="max-w-[200px] text-center">
            {productDetails?.attributes?.description[0]?.children[0]?.text}
          </p>
      </div>
    </div>
  );
};

export default ProductInfoDetails;
