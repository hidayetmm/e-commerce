import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import { commerce } from "./lib/commerce";
import Products from "./components/Products/Products";
import ProductView from "./components/ProductView/ProductView";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/CheckoutForm/Checkout/Checkout";
import NotFound from "./components/NotFound/NotFound";
import Contact from "./components/Contact/Contact";

const App = () => {
  const [cart, setCart] = useState({});
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  // Categories

  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();

    setCategories(data);
  };

  // Cart

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    console.log(cart);
    setCart(cart);
  };

  const handleAddToCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setCart(response.cart);
  };

  const handleUpdateCardQuantity = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
      console.log(errorMessage);
    }
  };

  useEffect(() => {
    fetchCart();
    fetchCategories();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar categories={categories} totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/checkout">
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              onUpdateCartQuantity={handleUpdateCardQuantity}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route path="/404" component={NotFound} />
          <Route path="/:category/:id">
            <ProductView
              onAddToCart={handleAddToCart}
              // loading={loading}
              // categories={categories}
            />
          </Route>
          <Route path="/:slug?">
            <Products
              onAddToCart={handleAddToCart}
              loading={loading}
              categories={categories}
            />
          </Route>
          {/* <Redirect from="*" to="/404" /> */}
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
