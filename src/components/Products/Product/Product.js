import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Box,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  console.log(product.description);
  return (
    <Card className={classes.root}>
      <Link
        className={classes.link}
        to={`/${product.categories[0].slug}/${product.id}`}
      >
        <CardActionArea disableRipple>
          <CardMedia
            className={classes.media}
            image={product.media.source}
            title={product.name}
          />
          <CardContent className={classes.Content}>
            <div className={classes.cardContent}>
              <Typography
                className={classes.name}
                variant="body1"
                align="left"
                gutterBottom
              >
                {product.name}
              </Typography>
              <Typography variant="body1">
                {product.price.formatted_with_symbol}
              </Typography>
            </div>
            <div>
              <Typography
                dangerouslySetInnerHTML={{ __html: product.description }}
                variant="body2"
                color="textSecondary"
                align="left"
                className={classes.description}
              />
            </div>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton
          aria-label="Add to cart"
          onClick={() => onAddToCart(product.id, 1)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
