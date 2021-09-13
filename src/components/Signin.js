import React, { Component, useEffect } from "react";
import {
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { getUsers } from "../api/api";
import { setInitUsers } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

function Signin() {
  return (
    <div className="testCard">
      <Container>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signin;
