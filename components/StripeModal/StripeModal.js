import React, { useState, useEffect } from 'react';
import ModalComponent from '../Modal';
import Swal from 'sweetalert2';

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
    <ModalComponent title="Transaction Details" show={show} close={close}>
      <Elements stripe={stripe}>
        <CheckoutForm payload={payload} close={close} />
      </Elements>
    </ModalComponent>
  );
};

function CheckoutForm({ payload, close }) {
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
      console.log(result.error.message);
    } else {
      const paymentData = { token: result.token.id, transaction: payload };
      chargePayment(paymentData).then((res) => {
        Swal.fire({
          title: 'You can track your transaction by Transaction ID',
          text: `TransactionID: #${res.data._id}`,
          icon: 'success',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, I copied Transaction ID!',
        })
          .then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Completed!',
                'You transaction completed',
                'success'
              );
              close();
            }
          })
          .catch((err) => {
            Swal.fire(
                'Failed!',
                'Your transaction has been faild!',
                'error'
              );
            close();
          });
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
