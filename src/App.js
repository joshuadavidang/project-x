import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import ForgetPassword from "./pages/ForgetPassword";
import PreLoginPage from "./pages/PreLoginPage";
import Diversity from "./pages/Science/Diversity";

function App() {
  return (
    // <Router basename="/project-x">
    <Router>
      <Switch>
        <Route exact path="/" component={PreLoginPage} />
        <Route path="/loginpage" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/landingpage" component={LandingPage} />
        <Route path="/forgetpassword" component={ForgetPassword} />
        <Route path="/diversity" component={Diversity} />

        {/* Development Purposes  */}
        {/* <Route path="/" component={LandingPage} /> */}
      </Switch>
    </Router>
  );
}

export default App;
