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
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.footer} color="inherit">
        <Container
        //  maxWidth="md"
        >
          <Toolbar>
            <Typography
              variant="body1"
              color="inherit"
              className={classes.typography}
            >
              Gent's Shop | The Sharpest Shop
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Footer;
