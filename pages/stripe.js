import React, { useState } from 'react';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { STRIPE_PUB_KEY } from '../constants';
import { chargePayment } from './api/stripe';

const StripeCompnent = () => {
  const stripe = loadStripe(STRIPE_PUB_KEY);
  return (
    <Elements stripe={stripe}>
      <CheckoutForm />
    </Elements>
  );
};

function CheckoutForm() {
  const [isPaymentLoading, setPaymentLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const payMoney = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    // setPaymentLoading(true);
    event.preventDefault();

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);

    if (result.error) {
      // Show error to your customer.
      console.log(result.error.message);
    } else {
      const paymentData = { token: result.token.id };
      chargePayment(paymentData).then((res) => {
        console.log('------After Patment charge', res);
      });
    }
  };

  return (
    <div
      style={{
        padding: '3rem',
      }}
    >
      <div
        style={{
          maxWidth: '500px',
          margin: '0 auto',
        }}
      >
        <form
          style={{
            display: 'block',
            width: '100%',
          }}
          onSubmit={payMoney}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <CardElement
              className="card"
              options={{
                style: {
                  base: {
                    backgroundColor: 'white',
                  },
                },
              }}
            />
            <button className="pay-button" disabled={isPaymentLoading}>
              {isPaymentLoading ? 'Loading...' : 'Pay'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StripeCompnent;
