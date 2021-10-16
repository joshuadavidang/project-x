import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/landingpage" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
