import React, { Component, useEffect } from "react";
import {
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import { getUsers } from "../api/api";
import { setInitUsers } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

function Users() {
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers().then((res) => {
      if (res.data !== undefined) {
        dispatch(setInitUsers(res.data));
      }
    });
  }, []);

  return (
    <div className="testCard">
      <NavigationBar />
      <Container>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Users;
