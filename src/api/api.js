import axios from "axios";

export async function getUsers() {
  return axios
    .get("/users")
    .then((response) => {
      //console.log("users", response);
      return response;
    })
    .catch((error) => {
      console.log(error);
      alert("Cannot find users");
    });
}

export async function getTests() {
  return axios
    .get("/tests")
    .then((response) => {
      //console.log("tests", response);
      return response;
    })
    .catch((error) => {
      console.log(error);
      alert("Cannot find questions");
    });
}

export async function getSubmissions() {
  return axios
    .get("/submissions")
    .then((response) => {
      console.log("submissions:", response);
      return response;
    })
    .catch((error) => {
      console.log(error);
      alert("Cannot find questions");
    });
}

export async function login(value) {
  return axios
    .post("/login", value)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      alert("Username/Passord incorrect!");
    });
}

export async function postSubmission(value) {
  console.log(value);
  return axios
    .post("/postSubmission", value)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}
