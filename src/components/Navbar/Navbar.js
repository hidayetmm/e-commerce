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
import { ShoppingCart, ForumIcon } from "@material-ui/icons";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import LeftDrawer from "./LeftDrawer/LeftDrawer";
import logo from "../../assets/logo.png";
import useStyles from "./styles";

const Navbar = ({
  fetchProducts,
  categories,
  fetchCategoryProducts,
  totalItems,
}) => {
  const [drawerToggle, setDrawerToggle] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerToggle(!drawerToggle);
  };

  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar className={classes.toolbar}>
          <Hidden mdUp implementation="css">
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

          <Link to="/" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="Gent's Shop"
              height="55px"
              className={classes.image}
            />
          </Link>
          <Hidden smDown>
            <div className={classes.grow} />
          </Hidden>
          <Hidden smDown>
            <div className={classes.nav}>
              <Typography
                component={NavLink}
                to="/contact"
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
          {location.pathname !== "/cart" && (
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
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
