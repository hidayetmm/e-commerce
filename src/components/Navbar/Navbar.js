import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Hidden,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import logo from "../../assets/logo.png";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Hidden mdUp>
            <IconButton>
              <MenuRoundedIcon />
            </IconButton>
          </Hidden>

          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="Gent's Shop"
              height="55px"
              className={classes.image}
            />
          </Typography>
          <div className={classes.grow} />
          <Hidden smDown>
            <div className={classes.nav}>
              <Typography
                component={NavLink}
                to="/"
                variant="body1"
                className={classes.navTitle}
                color="inherit"
              >
                Contact
              </Typography>
              <Typography
                component={NavLink}
                to="/"
                variant="body1"
                className={classes.navTitle}
                color="inherit"
              >
                About us
              </Typography>
            </div>
          </Hidden>
          {location.pathname === "/" && (
            <>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
