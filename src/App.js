import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Container className="md:container md:mx-auto">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/landingpage" component={LandingPage} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
