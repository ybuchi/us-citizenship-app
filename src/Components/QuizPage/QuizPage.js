import React, { useState } from "react"
import "./QuizPage.css"
import { Container, Col, Row } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useOutletContext } from "react-router-dom";

function QuizPage(){
    const [questionsData, setQuestionsData] = useOutletContext();
    const [quizQuestions, setQuizQuestions] = useState([]);


    //A function that filters out the questionsData to a particular question type (history, civics etc)
    function generateThematicQuestionsArray(questionType){
        const thematicQuestionsArray = questionsData.filter(question=>question.type.includes(questionType))
        return thematicQuestionsArray
    }

    //A helper function to shuffle arrays
    function shuffle(array) {
        let m = array.length, t, i;
      
        // While there remain elements to shuffle…
        while (m) {
      
          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);
      
          // And swap it with the current element.
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
      
        return array;
      }

      //A function to fetch a random set of 20 questions from the questions Data
      function fetchRandom20Questions(){
        //Generate an array of consecutive numbers that is the length fo the Questionsarray
        const baseArray = []

        //Hard coding CIVICS CHANGE THIS!!!!!!!!!!!!!
        const civicsQuestions = generateThematicQuestionsArray("civics");
         console.log(civicsQuestions);
    
        for (let i = 1; i < civicsQuestions.length; i++){
            baseArray.push(i)
        }
        //Shuffle that array
        const shuffledBase = shuffle(baseArray)

        //Use the first 20 numbers in the new array
        const base20index = shuffledBase.slice(0,20)
        const final20questions = base20index.map(index=>civicsQuestions[index])
        console.log("FInal20",final20questions)

        setQuizQuestions(final20questions)

        return(quizQuestions)
    }

  
    return(
        <>
        <Outlet context={[questionsData, setQuestionsData, generateThematicQuestionsArray, fetchRandom20Questions, quizQuestions]}/>
        </>
    )
}

export default QuizPage;