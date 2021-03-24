import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Grid,
  Divider,
} from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";

const Cart = ({
  cart,
  onUpdateCartQuantity,
  onRemoveFromCart,
  onEmptyCart,
}) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1" align="left">
      You have no items in your shopping cart.
      <br />
      <Link to="/" className={classes.link}>
        Start adding some!
      </Link>
    </Typography>
  );

  const FilledCart = () => (
    <div className={classes.items}>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <CartItem
              item={item}
              onUpdateCartQuantity={onUpdateCartQuantity}
              onRemoveFromCart={onRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h6" gutterBottom>
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            onClick={onEmptyCart}
            disableElevation
            disableRipple
          >
            Empty Cart
          </Button>
          <Button
            component={Link}
            to="/checkout"
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            disableElevation
            disableRipple
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );

  if (!cart.line_items) {
    return "Loading";
  }

  return (
    <main className={classes.content}>
      <Container>
        <div className={classes.toolbar}></div>
        <Typography
          className={classes.title}
          variant="h6"
          align="left"
          gutterBottom
        >
          Shopping Cart
        </Typography>
        <Divider />
        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </Container>
    </main>
  );
};

export default Cart;
