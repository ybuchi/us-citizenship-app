import { useEffect, useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Footer from './Components/Footer/Footer';


function App() {
  const [questionsData, setQuestionsData] = useState([])

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URI}/questions`)
        .then(res => res.json())
        .then(questionsData => setQuestionsData(questionsData))
    }, [])
  return (
    <>
    <NavigationBar />
    <Outlet context={[questionsData, setQuestionsData]} />
    <Footer/>
    </>
  );
}

export default App;