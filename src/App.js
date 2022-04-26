import { useEffect, useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';


function App() {
  const [questionsData, setQuestionsData] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/questions")
        .then(res => res.json())
        .then(questionsData => setQuestionsData(questionsData))
    }, [])
 
  return (
    <>
    <NavBar />
    <Outlet context={[questionsData, setQuestionsData]} />
    <Footer/>
    </>
  );
}

export default App;