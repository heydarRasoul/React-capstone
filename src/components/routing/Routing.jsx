import { Switch, Redirect, Route } from "react-router-dom";

import About from "../pages/About";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import SingleProduct from "../pages/SingleProduct";
import ShoppingCart from "../pages/ShoppingCart";
import Home from "../pages/Home";
import NoPage from "../pages/NoPage";

export default function Routing() {
  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/products" component={Products} />
      <Route path="/singleproduct/:id" component={SingleProduct} />
      <Route path="/shoppingcart" component={ShoppingCart} />
      <Route path="/home" component={Home} />
      <Redirect exact from="/" to="/home" />
      <Route component={NoPage} />
    </Switch>
  );
}
