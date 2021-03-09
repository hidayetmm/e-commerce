import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import RemoveRoundedIcon from "@material-ui/icons/RemoveRounded";
import useStyles from "./styles";

const CartItem = ({ item, onUpdateCartQuantity, onRemoveFromCart }) => {
  const classes = useStyles();
  console.log(item);
  return (
    <Card className={classes.root}>
      <CardMedia
        image={item.media.source}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5" align="left" className={classes.name}>
          {item.name}
        </Typography>
        <Typography variant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cartActions}>
        <div className={classes.buttons}>
          <IconButton
            size="medium"
            color="inherit"
            onClick={() => onUpdateCartQuantity(item.id, item.quantity - 1)}
          >
            <RemoveRoundedIcon fontSize="small" />
          </IconButton>
          <Typography variant="h6">{item.quantity}</Typography>
          <IconButton
            size="medium"
            color="inherit"
            onClick={() => onUpdateCartQuantity(item.id, item.quantity + 1)}
          >
            <AddRoundedIcon fontSize="small" />
          </IconButton>
        </div>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={() => onRemoveFromCart(item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
