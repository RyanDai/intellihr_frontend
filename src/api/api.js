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
