import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Container,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.footer} color="inherit">
        <Container
        //  maxWidth="md"
        >
          <Toolbar>
            <Typography variant="body1" color="inherit" component="div">
              Gent's Shop | The Sharpest Shop
            </Typography>
            <div className={classes.grow} />
            <Typography variant="body1" color="inherit" component="div">
              Follow us:
              <IconButton children={<FacebookIcon />} />
              <IconButton children={<InstagramIcon />} />
              <IconButton children={<WhatsAppIcon />} />
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Footer;
