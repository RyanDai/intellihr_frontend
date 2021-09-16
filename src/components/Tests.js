import React, { Component } from "react";
import { Form, Row, Button } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import { getTests } from "../api/api";
import { connect } from "react-redux";
import { postSubmission } from "../api/api";

class Tests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testSubmission: {
        submissions: new Map(),
        currentUsername: this.props.currentUser,
      },
    };
  }

  componentDidMount() {
    getTests().then((res) => {
      if (res.data !== undefined) {
        this.props.setInitTests(res);
      }
    });
  }

  handleInputChange = (id, event) => {
    console.log("event:", event);
    const target = event.target;
    const value = target.value;

    this.setState({
      testSubmission: {
        ...this.state.testSubmission,
        submissions: this.state.testSubmission.submissions.set(id, value),
      },
    });
  };

  submit = () => {
    const reqBody = {
      submissions: [...this.state.testSubmission.submissions],
      currentUsername: this.state.testSubmission.currentUsername,
    };
    postSubmission(reqBody)
      .then((result) => {
        alert("Submit successful");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const tests = this.props.tests;
    return (
      <div className="testCard">
        <NavigationBar />
        <Form>
          {tests ? (
            tests.map((test) => (
              <Row className="mt-5" key={test.Id}>
                <p>{test.Id}</p>
                <label htmlFor={test.Id}>{test.Label}</label>
                {test.Type === "select" && (
                  <select
                    id={test.Id}
                    onChange={(event) => this.handleInputChange(test.Id, event)}
                  >
                    <option value="normal">Normal coloured</option>
                    <option value="orange">Orange</option>
                    <option value="blue">Blue</option>
                  </select>
                )}
                {test.Type === "text" && (
                  <textarea
                    id={test.Id}
                    placeholder="Enter here"
                    onChange={(event) => this.handleInputChange(test.Id, event)}
                  />
                )}
                {test.Type === "boolean" && (
                  <div>
                    True:
                    <input
                      className="pl-3"
                      type="radio"
                      value="true"
                      name={test.Id}
                      onChange={(event) =>
                        this.handleInputChange(test.Id, event)
                      }
                    />
                    <br></br>
                    False:
                    <input
                      className="pl-3"
                      type="radio"
                      value="false"
                      name={test.Id}
                      onChange={(event) =>
                        this.handleInputChange(test.Id, event)
                      }
                    />
                  </div>
                )}
              </Row>
            ))
          ) : (
            <p>Loading data...</p>
          )}
          <Button variant="primary" onClick={this.submit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setInitTests: (value) => {
      dispatch({ type: "SET_INIT_TESTS", payload: value });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    tests: state.tests.testQuestions.data,
    currentUser: state.login.currentUser.userName,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tests);
