import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./pages/LoginPage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <LoginPage />
        </Col>

        <Col>
        col b
        </Col>
      </Row>
    </Container>
  );
}

export default App;
