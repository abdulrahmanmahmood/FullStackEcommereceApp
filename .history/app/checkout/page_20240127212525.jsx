import React from 'react'

const checkout = () => {
  return (
    <Elements stripe={stripePromise} options={options}>
    <CheckoutForm />
  </Elements>
  )
}

export default checkout