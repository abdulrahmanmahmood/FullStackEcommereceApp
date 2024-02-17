'use client'
import Image from "next/image";
import React from "react";
import SkeltonProductInfo from "./SkeltonProductInfo";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const ProductInfoDetails = ({ productDetails }) => {
  const {user} = useUser();
  const router = useRouter()
  const AddToCardHandler=()=>{
    if(!user){
      router.push()
    }else{
      console.log('allowed');
    }
  }
  return (
    <div>
      {productDetails?.attributes?.title ? (
        <div className=" w-[80%] mx-auto">
          <div className="items-center pt-5">
            <h2 className="flex-wrap font-medium text-center text-2xl">
              {productDetails?.attributes?.title}
            </h2>
            <div className="w-[80%] mx-auto">
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4  
             pt-11 ml-2  "
              >
                <h2 className="flex flex-row gap-2">
                  {" "}
                  <Image
                    src={"/menu.png"}
                    width={22}
                    height={22}
                    alt="meun"
                  />{" "}
                  {productDetails?.attributes?.category}
                </h2>

                <h2 className="flex flex-row gap-2 ">
                  {" "}
                  <Image
                    src={"/best-price.png"}
                    width={22}
                    height={22}
                    alt="meun"
                  />
                  : {productDetails?.attributes?.price}{" "}
                  <Image
                    src={"/dollar-symbol.png"}
                    width={20}
                    height={5}
                    alt="meun"
                  />
                </h2>
              </div>
            </div>
          </div>
          <p className="w-[85%] mx-auto pt-11 text-justify">
            {productDetails?.attributes?.description[0]?.children[0]?.text}
          </p>

          <div className="w-[85%] my-10 mx-auto">
            <a
              className="group flex items-center justify-between gap-4 rounded-lg border border-indigo-600 bg-indigo-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
              href="/#"
              onClick={AddToCardHandler}
            >
              <span className="font-medium text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500">
                Add To Cart
              </span>

              <span className="shrink-0 rounded-full border border-current bg-white p-2 text-indigo-600 group-active:text-indigo-500">
                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      ) : (
        <SkeltonProductInfo />
      )}
    </div>
  );
};

export default ProductInfoDetails;
