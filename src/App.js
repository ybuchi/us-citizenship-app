import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Welcome to the US Citizenship Naturalization App</h1>
      <h3>The place for you to practice studying for the naturalization interview</h3>

      <div className="home-card" id="study-card">
        <h1>Study Session</h1>
        <p>This is the place you can study and learn the test questions and their answers.</p>
      </div>
      <div className="home-card" id="quiz-card">
        <h1>Quiz Session</h1>
        <p>Think you have what it takes to pass the test? Quiz yourself here!</p>
      </div>
    </div>
  );
}

export default App;
