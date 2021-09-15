import React, { useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import { getUsers } from "../api/api";
import { setInitUsers } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Users() {
  const dispatch = useDispatch();
  const history = useHistory();

  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      history.push("/");
    }

    getUsers().then((res) => {
      if (res.data !== undefined) {
        dispatch(setInitUsers(res.data));
      }
    });
  }, []);

  const users = useSelector((state) => state.users.users);

  return (
    <div>
      <NavigationBar />
      <Container>
        {users ? (
          users
            .filter((user) => user.role !== "GLaDOS")
            .map((user) => (
              <Card className="mt-3 text-center" key={user.subjectId}>
                <Card.Header>{user.username}</Card.Header>
                <div className="d-inline">
                  <span>Test Chamber: </span>
                  {user.testChamber}
                </div>
                <div className="d-inline">
                  <span>Date of Birth: </span>
                  {user.DateOfBirth.split("T")[0]}
                </div>
                <div className="d-inline">
                  <span>Total Score: </span>
                  {user.totalScore}
                </div>
                <div className="d-inline">
                  <span>Alive: </span>
                  {user.alive.toString()}
                </div>
              </Card>
            ))
        ) : (
          <p>Loading data...</p>
        )}
      </Container>
    </div>
  );
}

export default Users;
