"use client";
import { useEffect, useState } from "react";
import CartApis from "../_utils/CartApis";
import ProductList from "../_components/ProductList";
import CartProductItem from "../_components/CartProductItem";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const cart = () => {
  
  const { user } = useUser();
  const [cartProducts, setCartProducts] = useState([]);
  const router = useRouter()
  useEffect(() => {
    getCartsProducts();
    // console.log('email>>',user);
  }, [user,cartProducts]);
  
  const getTotalAmount = () => {
    let totalAmount = 0;
    cartProducts.forEach((item)=>{
      totalAmount += Number(item?.attributes?.products?.data[0]
        ?.attributes?.price) 
      // console.log(item);
    })
    return totalAmount;
  };

  const getCartsProducts = () => {
    CartApis.getCartProducts(user?.primaryEmailAddress?.emailAddress).then(
      (res) => {
        // console.log('cart products',res.data.data)
        // console.log(user);
        setCartProducts(res?.data?.data);
      }
    );
  };
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              {cartProducts.map((ProductItem) => (
                <CartProductItem
                  ProductItem={ProductItem}
                  key={ProductItem.id}
                />
              ))}
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>${getTotalAmount()}</dd>
                  </div>
                </dl>


                <div className="flex justify-end">
                  <button
                    onClick={()=>{}}
                    className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
            <h2>Note: You will receive all the courses via email </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default cart;
