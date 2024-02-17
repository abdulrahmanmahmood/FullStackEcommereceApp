import { PaymentElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  return (
    <form className="my-10">
      <div className="mx-32 ">
        <PaymentElement />
      </div>{" "}
      <button>Submit</button>
    </form>
  );
};

export default CheckoutForm;
