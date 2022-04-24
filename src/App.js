import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
import { Outlet } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Navbar from './Components/Navbar/Navbar';
import questionsData from './Data/questions';
// import Home from './Components/Home/Home';


function App() {
  const [questionsData, setQuestionsData] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/questions")
        .then(res => res.json())
        .then(questionsData => setQuestionsData(questionsData))
    }, [])
 
  return (
    <>
    <Navbar />
    <Outlet context={[questionsData, setQuestionsData]} />
    </>
  );
}

export default App;