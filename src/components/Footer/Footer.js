import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Link,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import CallIcon from "@material-ui/icons/Call";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.footer} color="inherit">
        <Toolbar>
          <Grid
            container
            // direction="row"
            // justify="center"
            alignItems="center"
          >
            <Grid item md={6} sm={6} xs={12}>
              <Typography variant="body1" color="inherit" component="div">
                Gent's Shop | The Sharpest Shop
              </Typography>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <Typography
                variant="body1"
                color="inherit"
                style={{ display: "inline-block" }}
              >
                Contact:
              </Typography>
              <IconButton component={Link} to="/cart" aria-label="Facebook">
                <FacebookIcon color="primary" />
              </IconButton>
              <IconButton component={Link} to="/cart" aria-label="Instagram">
                <InstagramIcon color="secondary" />
              </IconButton>
              <IconButton component={Link} to="/cart" aria-label="Whatsapp">
                <WhatsAppIcon color="action" />
              </IconButton>
              <IconButton component={Link} to="/cart" aria-label="Call">
                <CallIcon color="action" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Footer;
