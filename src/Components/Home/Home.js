import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


function Home() {
  return (
    <div className="App">
      <h1>Welcome to the US Citizenship Naturalization App</h1>
      <h3>The place for you to practice studying for the naturalization interview</h3>

      <div className="home-card" id="study-card">
        <h1>Study Session</h1>
        <p>This is the place you can study and learn the test questions and their answers.</p>
        <Button variant="secondary">
          <Link to="study">Study Session</Link> 
        </Button>

      </div>
      <div className="home-card" id="quiz-card">
        <h1>Quiz Session</h1>
        <p>Think you have what it takes to pass the test? Quiz yourself here!</p>
        <Button variant="secondary">
          <Link to="quiz">Quiz Session</Link>
        </Button>
      </div>
    </div>
  );
}

export default Home;
