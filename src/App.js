import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// importing components
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartContainer from "./cart/CartContainer";
// importing pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleProduct from "./pages/SingleProduct";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/products">
          <ProductList />
        </Route>
        <Route path="/products/:id">
          <SingleProduct />
        </Route>
        <Route path="/cart">
          <CartContainer />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
