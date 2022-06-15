import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./Home.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {
  let navigate = useNavigate();

  function toStudy(){
    navigate("study")
  }
  function toQuiz(){
    navigate("quiz")
  }
  return (
    <div className="App">
    <header id="title-header" className="fade-in">
      <img src={require("../images/NApp.png")} alt="Ellis App"/>
      <h3>Study and Ace the US Naturalization Interview.</h3>
    </header>

    <section className="fade-in">
      <h4>Choose a session type below to begin.</h4>
    </section>
      
      
      <Container>
          <Row>
              <Col sm={12} md={6}>
                <div className="home-card fade-in" style={{animationDelay: "0.5s"}} id="study-card" onClick={toStudy}>
                    <div className="home-card-content">
                        <h1>Study Session</h1>
                        <p>This is the place you can study and learn the test questions and their answers.</p>
                    </div>
                    {/* <img className="menu-logo" src={require("../images/study-book.png")} alt="studybook"/> */}
                </div>
              </Col>
              <Col sm={12} md={6}>
                <div className="home-card fade-in" style={{animationDelay: "0.7s"}} id="quiz-card" onClick={toQuiz}>
                    <div className="home-card-content">
                        <h1>Quiz Session</h1>
                        <p>Think you have what it takes to pass the test? Quiz yourself here!</p>
                    </div>
                    {/* <img className="menu-logo" src={require("../images/quiz.png")} alt="quizlogo"/> */}
                </div>
              </Col>
          </Row>
      </Container>
    </div>
  );
}

export default Home;
