import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
  Hidden,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import LeftDrawer from "./LeftDrawer/LeftDrawer";
import logo from "../../assets/logo.png";
import useStyles from "./styles";

const Navbar = ({ categories, fetchCategoryProducts, totalItems }) => {
  const [drawerToggle, setDrawerToggle] = useState(false);

  const classes = useStyles();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setDrawerToggle(!drawerToggle);
  };
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              onClick={handleDrawerToggle}
              style={{ padding: "12px 20px 12px 5px" }}
              disableRipple
              disableFocusRipple
            >
              <MenuRoundedIcon />
            </IconButton>
            <LeftDrawer
              categories={categories}
              drawerToggle={drawerToggle}
              handleDrawer={handleDrawerToggle}
              fetchCategoryProducts={fetchCategoryProducts}
            />
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
                variant="button"
                className={classes.navTitle}
                color="inherit"
              >
                Contact
              </Typography>
              <Typography
                component={NavLink}
                to="/"
                variant="button"
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
