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

function UserCard() {
  const dispatch = useDispatch();

  return (
    <div className="userCard">
      <Container>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserCard;
