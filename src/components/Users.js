import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import { getUsers } from "../api/api";
import { setInitUsers } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Users() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const [sort, setSortValue] = useState("none");
  const [filter, setFilterValue] = useState(0);

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

  var users = useSelector((state) => state.users.users);

  //sort by score
  if (sort === "score") {
    users = users.sort((a, b) => (a.totalScore < b.totalScore ? 1 : -1));
  }
  //sort by test chamber
  if (sort === "chamber") {
    users = users.sort((a, b) => (a.testChamber > b.testChamber ? 1 : -1));
  }
  //filter: only show score above filter value
  if (filter !== 0) {
    users = users.filter((user) => user.totalScore > filter);
  }

  return (
    <div>
      <NavigationBar />
      <Container>
        <Button
          className="m-1"
          variant="primary"
          onClick={() => setSortValue("score")}
        >
          Sort by score
        </Button>
        <Button
          className="m-1"
          variant="primary"
          onClick={() => setSortValue("chamber")}
        >
          Sort by test chamber
        </Button>
        <span className="m-3">Show scores above </span>
        <input
          id={"score"}
          placeholder="0"
          onChange={(event) =>
            event.target.value === ""
              ? setFilterValue(0)
              : setFilterValue(parseInt(event.target.value))
          }
        />
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
