import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import ForgetPassword from "./pages/ForgetPassword";

function App() {
  return (
    <Router basename="/project-x">
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/landingpage" component={LandingPage} />
        <Route path="/forgetpassword" component={ForgetPassword} />
      </Switch>
    </Router>
  );
}

export default App;
