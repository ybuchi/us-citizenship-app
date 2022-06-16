import React from "react";
import "./QuizQuestionCard.css";
import Button  from "react-bootstrap/Button";
import ResultsCard from "../ResultsCard/ResultsCard";
import QuizQuestion from "../QuizQuestion/QuizQuestion";

// A component that can be recycle for most/all Quiz modes

function QuizQuestionCard({ question, currentQuestion, setCurrentQuestion, setQuizIsFinished, quizIsFinished, score, setScore, questionsToReview, setQuestionsToReview }){
   


    //A function that verifies the answer
   
   
    return(
        <div className="quiz-question-card fade-in">
            {quizIsFinished ? <ResultsCard questionsToReview={questionsToReview}
                                           setQuestionsToReview={setQuestionsToReview}
                                           score = {score} /> : <QuizQuestion currentQuestion={currentQuestion} 
                                                                              setCurrentQuestion={setCurrentQuestion}
                                                                              setQuizIsFinished={setQuizIsFinished}
                                                                              quizIsFinished={quizIsFinished}
                                                                              question={question}
                                                                              score={score}
                                                                              setScore={setScore}
                                                                              questionsToReview = {questionsToReview}
                                                                              setQuestionsToReview = {setQuestionsToReview}
                                                                />}
        </div>
    )
}

export default QuizQuestionCard;