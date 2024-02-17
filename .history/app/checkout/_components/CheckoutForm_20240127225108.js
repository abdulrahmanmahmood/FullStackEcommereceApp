import { PaymentElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  return (
    <form className="my-10">
      <div className="mx-32 md:mx-[320px] mt-12">
        <PaymentElement />
        <button className="bg-primary p-2 text-white rounded m-3 items-end">Submit</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
