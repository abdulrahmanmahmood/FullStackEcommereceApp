import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51OdETSLWP2ZX0pztIzjj9gloVU12RqctYKefjyGHEjtkdJddIttKkB9pUx1cjkKc0AWm2Ew3itKKGSKf67O2dtd700VDZjnwq0');

const checkout = () => {
  return (
    <Elements stripe={stripePromise} options={options}>
    <CheckoutForm />
  </Elements>
  )
}

export default checkout