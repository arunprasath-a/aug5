import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./stripe-button.styles.scss";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_nscv1OUnYLxTVbAn2VplBNHF00iEvoTave";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <React.Fragment>
      <StripeCheckout
        label="Pay Now"
        name="ARUN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </React.Fragment>
  );
};

export default StripeCheckoutButton;
