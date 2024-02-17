import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const checkout = () => {
  return (
    <Elements stripe={stripePromise} options={options}>
    <CheckoutForm />
  </Elements>
  )
}

export default checkout