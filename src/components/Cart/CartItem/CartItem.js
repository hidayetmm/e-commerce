import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { commerce } from "../../../lib/commerce";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import IconButton from "@material-ui/core/IconButton";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import RemoveRoundedIcon from "@material-ui/icons/RemoveRounded";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./styles";

const CartItem = ({ item, onUpdateCartQuantity, onRemoveFromCart }) => {
  const [productCategory, setProductCategory] = useState("");
  const classes = useStyles();

  const fetchSingleProduct = async (productId) => {
    const { categories } = await commerce.products.retrieve(productId);
    setProductCategory(categories[0].slug);
    console.log(productCategory);
  };
  useEffect(() => {
    fetchSingleProduct(item.product_id);
  }, []);

  return (
    <>
      {productCategory ? (
        <Card className={classes.root}>
          <Link
            className={classes.link}
            to={`/${productCategory}/${item.product_id}`}
          >
            <CardActionArea disableRipple>
              <CardMedia
                image={item.media.source}
                title={item.name}
                className={classes.media}
              />
              <CardContent className={classes.cardContent}>
                <Typography
                  variant="body1"
                  align="left"
                  className={classes.name}
                >
                  {item.name}
                </Typography>
                <Typography variant="body1">
                  {item.line_total.formatted_with_symbol}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
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
            <IconButton
              variant="contained"
              type="button"
              // color="inherit"
              onClick={() => onRemoveFromCart(item.id)}
            >
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Card>
      ) : (
        <Card className={classes.root}>
          <Skeleton animation="wave" variant="rect" className={classes.media} />

          <CardContent>
            <Skeleton
              animation="wave"
              height={12}
              style={{ marginBottom: 10 }}
            />
            <Skeleton animation="wave" height={12} width="80%" />
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default CartItem;
