import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import SquareLoader from "react-spinners/SquareLoader";

import Product from "./Product/Product";

const Products = ({ products, onAddToCart, loading }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />

      <Grid container justify="flex-start" spacing={9}>
        {loading ? (
          <div className={classes.loader}>
            <SquareLoader color="#14212d" />
          </div>
        ) : (
          products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product
                product={product}
                onAddToCart={onAddToCart}
                loading={loading}
              />
            </Grid>
          ))
        )}
      </Grid>
    </main>
  );
};

export default Products;
