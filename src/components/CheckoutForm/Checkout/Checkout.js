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

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
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

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 2);

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        backStep={backStep}
        nextStep={nextStep}
        onCaptureCheckout={onCaptureCheckout}
      />
    );
  const Confirmation = () => (
    <Typography>Your order is received. Thanks for choosing us!</Typography>
  );

  return (
    <>
      {loading ? (
        <div className={classes.loader}>
          <PropagateLoader size={19} color="#14212d" />
        </div>
      ) : (
        <main className={classes.content}>
          <div className={classes.toolbar}></div>
          <main className={classes.layout}>
            <Paper className={classes.paper}>
              <Typography variant="h5" align="center">
                Checkout
              </Typography>
              <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map((step) => (
                  <Step key={step}>
                    <StepLabel
                      StepIconProps={{
                        classes: {
                          root: classes.step,
                          completed: classes.completed,
                          active: classes.active,
                          disabled: classes.disabled,
                        },
                      }}
                    >
                      {step}
                    </StepLabel>
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
        </main>
      )}
    </>
  );
};

export default Checkout;
