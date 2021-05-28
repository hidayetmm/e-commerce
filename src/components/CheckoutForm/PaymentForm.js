import React from "react";
import { Typography, Button, Divider } from "@material-ui/core";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Review from "./Review";
import useStyles from "./styles";

const stripePromise = loadStripe(process.env.REACT_APP_CHEC_PUBLIC_KEY);

const PaymentForm = ({
  checkoutToken,
  shippingData,
  backStep,
  onCaptureCheckout,
  nextStep,
}) => {
  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      line_items: checkoutToken.live.line_items,
      customer: {
        firstname: shippingData.firstName,
        lastname: shippingData.lastName,
        email: shippingData.email,
      },
      shipping: {
        name: "Primary",
        street: shippingData.address1,
        town_city: shippingData.city,
        county_state: shippingData.shippingSubdivision,
        postal_zip_code: shippingData.zip,
        country: shippingData.shippingCountry,
      },
      fulfillment: { shipping_method: shippingData.shippingOption },
      payment: {
        gateway: "test_gateway",
        card: {
          number: "4242 4242 4242 4242",
          expiry_month: "1230",
          expiry_year: "2022",
          cvc: "123",
          postal_zip_code: "AZ-1040",
        },
      },
    };
    onCaptureCheckout(checkoutToken.id, orderData);

    nextStep();
  };
  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Payment method is Cash on Delivery
      </Typography>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="outlined" onClick={backStep}>
          Back
        </Button>
        <Button
          size="large"
          className={classes.button}
          aria-label="Add to cart"
          onClick={handleSubmit}
          disableElevation
          disableRipple
        >
          Pay {checkoutToken.live.line_items.formatted_with_symbol}
        </Button>
      </div>
    </>
  );
};

export default PaymentForm;
