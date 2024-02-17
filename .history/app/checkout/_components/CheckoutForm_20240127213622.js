import {PaymentElement} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  return (
    <form className='my-10'>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
};

export default CheckoutForm;