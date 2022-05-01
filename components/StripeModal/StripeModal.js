import React, { useState, useEffect } from 'react';
import ModalComponent from '../Modal';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { STRIPE_PUB_KEY } from '../../constants';
import { chargePayment } from '../../pages/api/stripe';
import { Input } from 'antd';

const StripeModal = ({ initState, show, close }) => {
  const [payload, setPayload] = useState(initState);
  const stripe = loadStripe(STRIPE_PUB_KEY);

  useEffect(() => {
    setPayload(initState);
  }, [initState]);

  const styles = {
    textAreaStyle: { width: '100%', borderRadius: 7, padding: 10 },
    inputLabelStyle: { fontSize: 18, margin: 10, width: 100 },
    inputLabelSize: { fontSize: 18, margin: 10, width: 150 },
    button: { fontSize: 18, width: 100, height: 40 },
    inputStyle: { width: 300 },
  };




  return (
    <ModalComponent
      title="Transaction Details"
      show={show}
      close={close}
    >
      <Elements stripe={stripe}>
      <CheckoutForm payload={payload} />
    </Elements>
    </ModalComponent>
  );
};

function CheckoutForm({ payload }) {
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
      const paymentData = { token: result.token.id, transaction: payload };
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


export default StripeModal
