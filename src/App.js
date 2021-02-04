import React from "react";
import { Navbar, Footer } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/homePage/Home";
import Services from "./pages/services/Services";
import Products from "./pages/products/Products";
import SignUp from "./pages/signUp/SignUp";
import LogIn from "./pages/logIn/LogIn";
import GlobalStyle from "./globalStyles";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/react-project-v1" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/log-in" exact component={LogIn} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
