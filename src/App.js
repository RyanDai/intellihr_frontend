import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Users from "./components/Users";
import Tests from "./components/Tests";
import Submissions from "./components/Submissions";
import Signin from "./components/Signin";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {isLoggedIn ? <Redirect to="/users" /> : <Signin />}
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/tests">
            <Tests />
          </Route>
          <Route exact path="/submissions">
            <Submissions />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
