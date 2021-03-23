import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { commerce } from "../../lib/commerce";
import Magnifier from "react-magnifier";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  IconButton,
  Divider,
  TextField,
  ButtonGroup,
} from "@material-ui/core";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import RemoveRoundedIcon from "@material-ui/icons/RemoveRounded";
import PropagateLoader from "react-spinners/PropagateLoader";
import useStyles from "./styles";

const ProductView = ({ onAddToCart }) => {
  let { id } = useParams();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemQuantity, setItemQuantity] = useState(1);

  const validateNumber = (event) => {
    const value = event.target.value;
    const setValue = value >= 1 ? value : itemQuantity;
    setItemQuantity(setValue);
  };

  const classes = useStyles();

  const fetchSingleProduct = async (productId) => {
    setLoading(true);
    const data = await commerce.products.retrieve(productId);
    setProduct(data);
    console.log(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" alignItems="center">
        {loading ? (
          <div className={classes.loader}>
            <PropagateLoader size={19} color="#14212d" />
          </div>
        ) : (
          <Grid item key={product.id} xs={10} md={10} lg={9}>
            <Card className={classes.root}>
              <CardActionArea disableRipple>
                <div
                  className={classes.media}
                  // // image={product.media.source}
                  // title={product.name}
                >
                  <Magnifier
                    className={classes.magnifier}
                    // height="auto"
                    width="auto"
                    mgWidth={170}
                    mgHeight={170}
                    mgShape="square"
                    src={product.media.source}
                  />
                </div>
              </CardActionArea>
              <Divider orientation="vertical" flexItem light />
              <div className={classes.Content}>
                <CardContent>
                  <Typography variant="h5" align="left" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="h6" align="left">
                    {product.price.formatted_with_symbol}
                  </Typography>
                  <Typography
                    dangerouslySetInnerHTML={{ __html: product.description }}
                    variant="body1"
                    color="textSecondary"
                    align="left"
                  />
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                  <ButtonGroup disableRipple disableFocusRipple>
                    <IconButton
                      color="inherit"
                      onClick={() =>
                        setItemQuantity(
                          itemQuantity === 0 ? 0 : itemQuantity - 1
                        )
                      }
                    >
                      <RemoveRoundedIcon fontSize="small" />
                    </IconButton>
                    <TextField
                      id="amount"
                      value={itemQuantity}
                      onChange={validateNumber}
                      type="tel"
                      variant="outlined"
                      size="small"
                      inputProps={{
                        style: { width: 50, textAlign: "center" },
                      }}
                    />
                    <IconButton
                      color="inherit"
                      onClick={() => setItemQuantity(itemQuantity + 1)}
                    >
                      <AddRoundedIcon fontSize="small" />
                    </IconButton>
                  </ButtonGroup>
                  <Button
                    // size="large"
                    className={classes.button}
                    aria-label="Add to cart"
                    onClick={() =>
                      onAddToCart(
                        product.id,
                        itemQuantity === 0 ? 1 : itemQuantity
                      )
                    }
                    disableElevation
                    disableRipple
                  >
                    Add to cart
                  </Button>
                </CardActions>
              </div>
            </Card>
          </Grid>
        )}
      </Grid>
    </main>
  );
};

export default ProductView;
