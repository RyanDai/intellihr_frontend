import React, { Component } from "react";
import {
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function TestCard() {
  const dispatch = useDispatch();
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

export default TestCard;
