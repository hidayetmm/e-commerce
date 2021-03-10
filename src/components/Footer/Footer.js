import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Link,
  Typography,
  Grid,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import CallIcon from "@material-ui/icons/Call";
import logo from "../../assets/logo.png";

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
              <img
                src={logo}
                alt="Gent's Shop"
                height="80px"
                // className={classes.image}
              />
              <Typography
                variant="body1"
                color="inherit"
                gutterBottom
                style={{ padding: "1%" }}
              >
                Gent's Shop | The Sharpest Shop
                <br />
                Baku, Azerbaijan
              </Typography>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <Typography variant="body1" color="inherit">
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
              <br />
              <Button
                variant="outlined"
                color="inherit"
                size="small"
                startIcon={<CallIcon />}
              >
                051 330 0091
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Footer;
