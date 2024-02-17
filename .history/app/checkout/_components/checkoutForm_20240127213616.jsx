import {PaymentElement} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  return (
    <form mx>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
};

export default CheckoutForm;