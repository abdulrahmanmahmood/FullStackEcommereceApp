import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import CartApis from "../../_utils/CartApis";
import OrderAPis from '../../_utils/OrderApis'; // Adjust the path based on your project structure
import { useUser } from "@clerk/nextjs";

const CheckoutForm = ({ amount }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errormessage, setErrorMessage] = useState();
  const { user } = useUser();

  useEffect(() => {
    getCartsProducts();
  }, [cartProducts]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const handleError = (error) => {
      setLoading(false);
      setErrorMessage(error.message);
    };
    
    createOrder();

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
      clientSecret,
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payment-confirm",
      },
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };

  const getCartsProducts = () => {
    CartApis.getCartProducts(user?.primaryEmailAddress?.emailAddress).then(
      (res) => {
        setCartProducts(res?.data?.data);
      }
    );
  };

  const createOrder = () => {
    let productIds = [];
    cartProducts.forEach((el) => {
      // productIds.push(el?.product?.id);
      console.log(el?.product);
    });
    const data = {
      data: {
        email: user?.primaryEmailAddress?.emailAddress,
        username: user?.fullName,
        amount,
        products: productIds,
      },
    };
    OrderAPis.createOrder(data).then((res) => {
      if (res) {
        cartProducts.forEach((el) => {
          CartApis.deleteCartItem(el?.id).then((result) => {
            console.log('cart ids',el?.id);
          });
        });
      }
    });
  };

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
