import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./Home.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {
  return (
    <div className="App">
      <h1>Welcome to the US Citizenship Naturalization App</h1>
      <h3>The best place for you to practice for you naturalization test.</h3>
      
      <Container>
          <Row>
              <Col sm={12} md={6}>
                <div className="home-card" id="study-card">
                    <div className="home-card-content">
                        <h1>Study Session</h1>
                        <p>This is the place you can study and learn the test questions and their answers.</p>
                        <Button variant="secondary">
                            <Link className="page-nav-btn" to="study">Study Session</Link> 
                        </Button>
                    </div>
                </div>
              </Col>
              <Col sm={12} md={6}>
                <div className="home-card" id="quiz-card">
                    <div className="home-card-content">
                        <h1>Quiz Session</h1>
                        <p>Think you have what it takes to pass the test? Quiz yourself here!</p>
                        <Button variant="secondary">
                        <Link className="page-nav-btn" to="quiz">Quiz Session</Link>
                        </Button>
                    </div>
                </div>
              </Col>
          </Row>
      </Container>
    </div>
  );
}

export default Home;
