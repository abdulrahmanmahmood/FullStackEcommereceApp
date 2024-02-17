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
        <h2 className="text-lg font-medium text-center">
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
      <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
          quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
        </p>
      </div>
    </div>
    </div>
  );
};

export default ProductItem;
