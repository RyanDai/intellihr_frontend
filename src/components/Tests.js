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
import store from "../index";

function Tests() {
  const dispatch = useDispatch();

  useEffect(() => {
    getTests().then((res) => {
      if (res.data !== undefined) {
        dispatch(setInitTests(res));
      }
    });
  }, []);

  const tests = useSelector((state) => state.tests.testQuestions.data);

  return (
    <div className="testCard">
      {tests.map((test) => (
        <Container>
          <Row>
            <Col>{test.Label}</Col>
          </Row>
          <Row>
            <Col>{test.Label}</Col>
          </Row>
        </Container>
      ))}
    </div>
  );
}

export default Tests;
