import React, { useState, useEffect } from "react";
import "./TwentyQuestions.css";
import { useOutletContext } from "react-router-dom";
import QuizQuestionCard from "../QuizQuestionCard/QuizQuestionsCard";


function TwentyQuestions(){
    const [quizQuestions] = useOutletContext();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [quizIsFinished, setQuizIsFinished] = useState(false);

   console.log(quizQuestions);
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
