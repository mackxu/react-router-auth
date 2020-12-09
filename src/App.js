import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AuthButton from "./component/AuthButton";
import LoginPage from "./component/LoginPage";
import PrivateRoute from "./component/PrivateRoute";
import ProvideAuth from "./component/ProvideAuth";

function App() {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <AuthButton></AuthButton>
          <ul>
            <li>
              <Link to="/public">public page</Link>
            </li>
            <li>
              <Link to="/protected">Protected page</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/public">
              <PublicPage></PublicPage>
            </Route>
            <Route path="/login">
              <LoginPage></LoginPage>
            </Route>
            <PrivateRoute path="/protected">
              <ProtectedPage />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

function PublicPage() {
  return <h3>Public</h3>
}

function ProtectedPage() {
  return <h3>Protected</h3>
}

export default App;
