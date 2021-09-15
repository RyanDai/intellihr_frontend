import React, { useEffect } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { getSubmissions } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setInitSubmissions } from "../actions/submissionActions";
import NavigationBar from "./NavigationBar";

function Submissions() {
  const dispatch = useDispatch();
  const history = useHistory();

  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      history.push("/");
    }

    getSubmissions().then((res) => {
      console.log("data back:", res);
      if (res.data !== undefined) {
        dispatch(setInitSubmissions(res.data));
      }
    });
  }, []);

  const submissions = useSelector((state) => state.submission.submissions);
  const currentUsername = useSelector(
    (state) => state.login.currentUser.userName
  );

  return (
    <div>
      <NavigationBar />
      <Container>
        {submissions ? (
          submissions
            .filter(
              (submission) =>
                submission.currentUsername === currentUsername ||
                currentUsername === "GLaDOS"
            )
            .map((submission) => (
              <Card className="mt-3 text-center" key={submission._id}>
                <Card.Header>{submission.currentUsername}</Card.Header>
                {submission.responses.map((response) => (
                  <div key={response.questionId}>
                    <div className="d-inline">
                      <span>Question number: </span>
                      {response.questionId}
                      <br></br>
                      <span>Value: </span>
                      {response.value}
                    </div>
                  </div>
                ))}
              </Card>
            ))
        ) : (
          <p>Loading data...</p>
        )}
      </Container>
    </div>
  );
}

export default Submissions;
