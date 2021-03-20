import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import { commerce } from "../../lib/commerce";
import { Grid, Hidden, Typography } from "@material-ui/core";
import useStyles from "./styles";
import PropagateLoader from "react-spinners/PropagateLoader";
import UndrawEmpty from "react-undraw-illustrations/lib/components/UndrawEmpty/UndrawEmpty";

import Product from "./Product/Product";
import ProductNav from "../Navbar/ProductNav/ProductNav";

const Products = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  let { slug } = useParams();

  const fetchProducts = async () => {
    setLoading(true);
    const { data } = await commerce.products.list();

    setProducts(data);
    setLoading(false);
  };

  const fetchCategoryProducts = async (categorySlug) => {
    try {
      setLoading(true);
      const { data } = await commerce.products.list({
        category_slug: [categorySlug],
      });
      setLoading(false);
      setProducts(data);
      console.log(products);
    } catch (e) {
      setLoading(false);
      setError(true);
      console.log(products);
    }
  };

  useEffect(() => {
    slug ? fetchCategoryProducts(slug) : fetchProducts();
  }, [slug]);

  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Hidden smDown>
        <ProductNav />
      </Hidden>

      <Grid container justify="flex-start" spacing={9}>
        {loading ? (
          <div className={classes.loader}>
            <PropagateLoader size={19} color="#14212d" />
          </div>
        ) : products ? (
          products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product
                product={product}
                onAddToCart={onAddToCart}
                loading={loading}
              />
            </Grid>
          ))
        ) : (
          <div className={classes.svg}>
            <UndrawEmpty primaryColor="#14212d" />
            <Typography color="textSecondary">No products found</Typography>
          </div>
        )}
        {error ? <Redirect to="/404" /> : null}
      </Grid>
    </main>
  );
};

export default Products;
