import React, { useContext, useEffect, useState, Fragment } from "react";
import { CartContext } from "../Contexts/Cart/CartContext";
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Badge,
  Button
} from "reactstrap";
import { Formatter } from "../Helpers/Functions";
import { Link } from "react-router-dom";

export default function MiniCart(props) {
  const { items, ...cart } = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);
  const [dropdownOpen, toggle] = useState(false);

  useEffect(() => {
    let _items = [];
    items.forEach((quantity, product) => {
      _items.push(<MiniCartRow product={product} quantity={quantity} />);
    });
    setCartItems(_items);
  }, [items]);

  return (
    <div className="miniCart">
      <Dropdown isOpen={dropdownOpen} toggle={() => toggle(!dropdownOpen)}>
        <DropdownToggle caret>
          Cart <Badge color="dark">{cart.count()}</Badge>
        </DropdownToggle>
        <DropdownMenu right>
          <MiniCartItems items={cartItems} />
          <MiniCartPrice total={cart.total()} />
          <hr />
          <div className="miniCart--buttons">
            <Link to="/checkout">
              <Button block color="primary" onClick={e => toggle(false)}>
                Checkout
              </Button>
            </Link>
            <Button
              color="danger"
              onClick={e => {
                cart.clearCart();
                toggle(false);
              }}
            >
              Clear Cart
            </Button>
          </div>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
function MiniCartRow({ product, quantity, ...props }) {
  return (
    <Row>
      <Col xs="6">{product["Name"]}</Col>
      <Col xs="3">{quantity}</Col>
      <Col xs="3">{Formatter.format(quantity * product["Price"])}</Col>
    </Row>
  );
}

function MiniCartItems({ items, ...props }) {
  return (
    <div className="minicart__items">
      <Container fluid={true}>
        {items.map((item, index) => (
          <Fragment key={`miniCartItem-${index}`}>
            {item}
            <hr />
          </Fragment>
        ))}
      </Container>
    </div>
  );
}

function MiniCartPrice({ total, ...props }) {
  return (
    <div className="miniCart__price">
      <p>Total Price: {Formatter.format(total)}</p>
    </div>
  );
}
