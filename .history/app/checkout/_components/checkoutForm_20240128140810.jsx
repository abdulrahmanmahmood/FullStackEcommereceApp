"use client";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import CartApis from "../../_utils/CartApis";
import { useUser } from "@clerk/nextjs";

const CheckoutForm = ({amount}) => {

  const [cartProducts, setCartProducts] = useState([]);

  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false)
  const [errormessage, setErrorMessage] = useState()

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const handleError = (error) => {
  setLoading(false)
  setErrorMessage(error.message)
    }
    createOrder()

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }

    const res = await fetch("api/create-intent", {
      method: "POST",
      body: JSON.stringify({
        amount: amount,
      }),
    });
    const clientSecret = await res.json();
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      clientSecret,
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payment-confirm",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
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

  const createOrder =()=>{
    let productIds = [];
    cartProducts.forEach(()=>{
      productIds.push(el?.product?.id)
    })
    const data = {
      data:{
        email:user?.primaryEmailAddress?.emailAddress,
        username:user.fullName,
        amount,
        products:productIds
      }
    }
    OrderAPis.createOrder(data).then((res)=>{
      if(res){
        cartProducts.forEach(el=>{
          CartApis.deleteCartItem(el?.id).then(result =>{

          })
        })
      }
    })
  }



  return (
    <form className="my-10" onSubmit={handleSubmit}>
      <div className="mx-32 md:mx-[320px] mt-12">
        <PaymentElement />
        <button className="bg-primary p-2 text-white rounded  mt-5 w-full">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
