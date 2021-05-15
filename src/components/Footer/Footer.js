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
            <Grid item lg={1} md={1} />
            <Grid item md={2} sm={2} xs={12}>
              <img
                src={logo}
                alt="Gent's Shop"
                height="80px"
                // className={classes.image}
              />
            </Grid>
            <Grid item lg={3} md={3} xs={12}>
              <Typography
                variant="body1"
                color="inherit"
                style={{
                  width: "100%",
                }}
              >
                Gent's Shop | The Sharpest Shop
              </Typography>
              <Typography
                variant="body1"
                color="inherit"
                gutterBottom
                style={{
                  width: "100%",
                }}
              >
                Baku, Azerbaijan
              </Typography>
            </Grid>
            <Grid item lg={1} md={1} />
            <Grid item lg={5} md={5} sm={6} xs={12}>
              <Button
                variant="outlined"
                color="inherit"
                size="small"
                startIcon={<CallIcon />}
                className={classes.button}
                href="tel:0513300091"
              >
                051 330 0091
              </Button>

              <div className={classes.socialIcons}>
                <IconButton
                  component={Link}
                  href="https://www.facebook.com/gentsshop.az"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FacebookIcon color="primary" />
                </IconButton>
                <IconButton
                  component={Link}
                  aria-label="Instagram"
                  href="https://www.instagram.com/gentsshop.az/"
                  target="_blank"
                >
                  <InstagramIcon color="secondary" />
                </IconButton>
                <IconButton
                  component={Link}
                  href="https://api.whatsapp.com/send?phone=+994513300091"
                  target="_blank"
                  aria-label="Whatsapp"
                >
                  <WhatsAppIcon color="action" />
                </IconButton>
              </div>
            </Grid>
            {/* <Grid item lg={2} md={2} sm={6} xs={12}>
              
            </Grid> */}
            <Grid item lg={1} md={1} />
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Footer;
