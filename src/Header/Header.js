import React from "react";
import MiniCart from "../MiniCart/MiniCart";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { withContexts } from "../Contexts/AllContexts";
import { CartContext } from "../Contexts/Cart/CartContext";
import { UserContext } from "../Contexts/User/UserContext";
import { SearchableContext } from "../Contexts/Searchable/SearchableContext";

function Header({ cart, user, search, ...props }) {
  function signOut(e) {
    search.clearFacets();
    cart.clearCart();
    user.logOutUser();
  }
  return (
    <header>
      <Container fluid={true}>
        <Row className="header--row">
          <Col xs="6">
            <p>PageBroke Home</p>
          </Col>
          <Col xs="6" className="header--links">
            <Link to="/practice">Utilitiy Components</Link>
            <Link to="/">Search</Link>
            {!user.activeUser && <Link to="/log-in">Log In</Link>}
            {!user.activeUser && <Link to="/register">Register</Link>}
            {user.activeUser && <Link to="/checkout">Checkout</Link>}
            {user.activeUser && (
              <a href="#" onClick={e => signOut(e)}>
                Log Out
              </a>
            )}
            <MiniCart />
          </Col>
          {/* <Col xs="2" className="header--cart">
          </Col> */}
        </Row>
      </Container>
    </header>
  );
}

export default withContexts(Header, {
  cart: CartContext,
  user: UserContext,
  search: SearchableContext
});
