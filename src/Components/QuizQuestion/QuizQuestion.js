import React from "react";
import "./QuizQuestion.css"
import Button from "react-bootstrap/Button";

function QuizQuestion({ question, currentQuestion, setCurrentQuestion, quizIsFinished, setQuizIsFinished, handleNextQuestion}){
    return(
        <>
        <header className="quiz-question-title">{question.question}</header>
        <h3>{currentQuestion + 1} / 20</h3>
        <Button onClick={handleNextQuestion}>Submit</Button>
        </>
        
    )
}

export default QuizQuestion;