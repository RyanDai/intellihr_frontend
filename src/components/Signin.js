import React, { Component, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { login } from "../api/api";
import { log_in, log_out } from "../actions/loginActions";
import { connect } from "react-redux";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: {
        username: "",
        password: "",
      },
      usernameError: null,
      passwordError: null,
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      account: {
        ...this.state.account,
        [name]: value,
      },
    });
  };

  _handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.login();
    }
  };

  login = () => {
    login(this.state.account).then((result) => {
      this.props.log_in();
    });
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="username"
              name="username"
              placeholder="Enter username"
              onChange={(event) => this.handleInputChange(event)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={(event) => this.handleInputChange(event)}
              onKeyPress={this._handleKeyPress}
            />
          </Form.Group>
          <Button variant="primary" type="button" onClick={this.login}>
            Sign in
          </Button>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    log_in: () => {
      dispatch({ type: "LOGIN" });
    },
  };
};

export default connect(null, mapDispatchToProps)(Signin);
