import React from "react";
import SearchPageProducts from "./Search/SearchPageProducts";
import { Container, Row, Col } from "reactstrap";
import SearchBar from "./Search/SearchBar";
import Header from "./Header/Header";
import { Contexts } from "./Contexts/AllContexts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CheckoutPage } from "./Checkout/OneCheckout";
import { SignInPage } from "./Authentication/SignInPage";
import PracticePage from "./Practice";
import { RegistrationPage } from "./Registration";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Contexts>
          {/* Header */}
          <Header testProp="test property" />

          {/* Containers */}
          <Container fluid={true}>
            <Switch>
              {/* Practice Page */}
              <Route path="/practice">
                <PracticePage />
              </Route>

              {/* Checkout Page */}
              <Route path="/checkout">
                <CheckoutPage />
              </Route>

              {/* Sign In Page */}
              <Route path="/log-in">
                <SignInPage />
              </Route>

              {/* Registration Page */}
              {/* <Route path="/register">
                <RegistrationPage />
              </Route> */}

              {/* Home Page */}
              <Route path="/">
                <Row>
                  {/* Search */}
                  <Col xs="12" md="3" lg="2">
                    <SearchBar />
                  </Col>

                  {/* Products */}
                  <Col xs="12" md="9" lg="10">
                    <SearchPageProducts />
                  </Col>
                </Row>
              </Route>
            </Switch>
          </Container>
        </Contexts>
      </Router>
    </div>
  );
}
