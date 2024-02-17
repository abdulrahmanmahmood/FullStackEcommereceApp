import { PaymentElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  return (
    <form className="my-10">
      <div cl>
        <PaymentElement />
      </div>{" "}
      <button>Submit</button>
    </form>
  );
};

export default CheckoutForm;
