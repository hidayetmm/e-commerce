import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typhography,
  Typography,
} from "@material-ui/core";
import FormInput from "./FormInput";
import { commerce } from "../../lib/commerce";
import { useForm, FormProvider } from "react-hook-form";

const AddressForm = ({ checkoutToken }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
  const methods = useForm();

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    console.log(countries);
    setShippingCountries(countries);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  return (
    <>
      <Typography variant="h6" align="left" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        {/* <form onSubmit="">
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="address1" label="Address" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="ZIP / Postal code" />
            <Grid container item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select value="" onChange="" fullWidth>
                <MenuItem value="" key="">
                  Select me
                </MenuItem>
              </Select>
            </Grid>
            <Grid container item xs={12} sm={6}>
              <InputLabel>Shipping Division</InputLabel>
              <Select value="" onChange="" fullWidth>
                <MenuItem value="" key="">
                  Select me
                </MenuItem>
              </Select>
            </Grid>
            <Grid container item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value="" onChange="" fullWidth>
                <MenuItem value="" key="">
                  Select me
                </MenuItem>
              </Select>
            </Grid>
          </Grid>
        </form> */}
      </FormProvider>
    </>
  );
};

export default AddressForm;
