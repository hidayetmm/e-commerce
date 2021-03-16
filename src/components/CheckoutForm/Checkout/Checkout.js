import React, { useState, useEffect } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import { commerce } from "../../../lib/commerce";
import PropagateLoader from "react-spinners/PropagateLoader";
import useStyles from "./styles";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";

const steps = ["Shipping address", "Payment details"];

const Checkout = ({ cart }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const classes = useStyles();

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        setLoading(false);
        setCheckoutToken(token);
      } catch (error) {}
    };
    generateToken();
  }, [cart]);

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} />
    ) : (
      <PaymentForm />
    );
  const Confirmation = () => <div>Confirmation</div>;

  return (
    <>
      {loading ? (
        <div className={classes.loader}>
          <PropagateLoader size={19} color="#14212d" />
        </div>
      ) : (
        <div>
          <div className={classes.toolbar}></div>
          <main className={classes.layout}>
            <Paper className={classes.paper}>
              <Typography variant="h4" align="center">
                Checkout
              </Typography>
              <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map((step) => (
                  <Step key={step}>
                    <StepLabel>{step}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              {activeStep === steps.length ? (
                <Confirmation />
              ) : (
                checkoutToken && <Form />
              )}
            </Paper>
          </main>
        </div>
      )}
    </>
  );
};

export default Checkout;
