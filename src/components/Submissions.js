import React, { Component, useEffect } from "react";
import {
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { getTests } from "../api/api";
import { setInitTests } from "../actions/testActions";
import { useDispatch, useSelector } from "react-redux";

function Tests() {
  const dispatch = useDispatch();

  useEffect(() => {
    getTests().then((res) => {
      if (res.data !== undefined) {
        dispatch(setInitTests(res.data));
      }
    });
  });

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

export default Tests;
