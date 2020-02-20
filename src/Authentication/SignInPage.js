import React, { useState } from "react";
import { withContexts } from "../Contexts/AllContexts";
import { UserContext } from "../Contexts/User/UserContext";
import {
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Alert
} from "reactstrap";
import { Redirect } from "react-router";

const [defaultUsername, defaultPasssword] = ["admin@yourcompany.com", "store"];

function SignInPageComponent({ user, ...props }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verified, setVerified] = useState(null);

  function logInUser(e) {
    e.preventDefault();
    setVerified(user.authenticateUser(email, password));
  }

  function logInAsAdmin() {
    setVerified(user.authenticateUser(defaultUsername, defaultPasssword));
  }

  return user.activeUser !== null ? (
    <Redirect to="/" />
  ) : (
    <div className="signInPage">
      <Row>
        <Col xs="12" md="6">
          <h2>Log In</h2>
          {verified === false && (
            <Alert color="danger">Username or Password is incorrect.</Alert>
          )}
          <Form onSubmit={e => logInUser(e)}>
            <FormGroup>
              <Label for="signin-email">Email</Label>
              <Input
                type="text"
                name="email"
                id="signin-email"
                onChange={e => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="signin-password">Password</Label>
              <Input
                type="password"
                name="email"
                id="signin-password"
                onChange={e => setPassword(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Button type="submit" color="primary">
                Log In
              </Button>
              <Button
                type="button"
                color="secondary"
                onClick={() => logInAsAdmin()}
              >
                Log In As Guest Admin
              </Button>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export const SignInPage = withContexts(SignInPageComponent, {
  user: UserContext
});
