import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_51KWXclItCSdkqK71CMtw9gPXdsi77zTdYIiTFXZZ04EaQGOBtaC3lRHpcOxIKGSGuLhEoAmErligngzDQ7DJI2qz00ofzrAioG'

  const onToken = token => {
    axios.post('payment', { amount: priceForStripe, token })
      .then(() => {
        alert('Payment Successful')
      })
      .catch((error) => {
        console.log('Payment error', JSON.parse(error));
        alert('There was an issue with your payment')
      })
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/microformat.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
