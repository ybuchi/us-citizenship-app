import React, { useState, useRef, useEffect } from "react";
import "./QuizQuestionCard.css";
import Button  from "react-bootstrap/Button";
import ResultsCard from "../ResultsCard/ResultsCard";
import QuizQuestion from "../QuizQuestion/QuizQuestion";

// A component that can be recycle for most/all Quiz modes

function QuizQuestionCard({ question, currentQuestion, setCurrentQuestion, setQuizIsFinished, quizIsFinished, score, setScore }){
   


    //A function that verifies the answer
   
   
    return(
        <div className="quiz-question-card">
            {quizIsFinished ? <ResultsCard score = {score} /> : <QuizQuestion currentQuestion={currentQuestion} 
                                                                              setCurrentQuestion={setCurrentQuestion}
                                                                              setQuizIsFinished={setQuizIsFinished}
                                                                              quizIsFinished={quizIsFinished}
                                                                              question={question}
                                                                              score={score}
                                                                              setScore={setScore}
                                                                />}
             <p>{currentQuestion + 1} / 20</p>
        </div>
    )
}

export default QuizQuestionCard;