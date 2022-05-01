import React, { useState, useEffect } from "react";
import "./TwentyQuestions.css";
import { useOutletContext } from "react-router-dom";
import QuizQuestionCard from "../QuizQuestionCard/QuizQuestionsCard";


function TwentyQuestions(){
    const [questionsData] = useOutletContext();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [quizIsFinished, setQuizIsFinished] = useState(false);
    const [quizQuestions, setQuizQuestions] = useState([]);

   

    useEffect(()=>{
         //A function to fetch a random set of 20 questions from the questions Data
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

            return(final20questions)
    }
        setQuizQuestions(fetchRandom20Questions())

    }, [questionsData])
    return(
        <>
        <div id="twenty-questions-title">
            <h1> 20 Questions </h1>
        </div>
        <div className="quiz-container">
            {quizQuestions.length === 0 ? <h1>Loading...</h1> :<QuizQuestionCard 
                                            question={quizQuestions[currentQuestion]} 
                                            currentQuestion={currentQuestion} 
                                            setCurrentQuestion={setCurrentQuestion}
                                            setQuizIsFinished={setQuizIsFinished}
                                            quizIsFinished={quizIsFinished}/> }
        </div>
        </>
    )
}

export default TwentyQuestions;
