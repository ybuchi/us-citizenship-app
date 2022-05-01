import React from "react";
import "./QuizQuestionCard.css";
import Button  from "react-bootstrap/Button";
import ResultsCard from "../ResultsCard/ResultsCard";
import QuizQuestion from "../QuizQuestion/QuizQuestion";

// A component that can be recycle for most/all Quiz modes

function QuizQuestionCard({ question, currentQuestion, setCurrentQuestion, setQuizIsFinished, quizIsFinished }){
    function handleNextQuestion(){
        if (currentQuestion === 19){
            setQuizIsFinished(true);
        }else{
            const nextQuestion = ++currentQuestion
            setCurrentQuestion(nextQuestion)
        }
    }
    return(
        <div className="quiz-question-card">
            {quizIsFinished ? <ResultsCard /> : <QuizQuestion currentQuestion={currentQuestion} 
                                                              setCurrentQuestion={setCurrentQuestion}
                                                              setQuizIsFinished={setQuizIsFinished}
                                                              quizIsFinished={quizIsFinished}
                                                              question={question}
                                                              handleNextQuestion={handleNextQuestion}/>}
            {/* Question */}
            {/* Form input where user types in their answer */}
            {/* Submit button: when user submits, goes on to the next question. */}
        </div>
    )
}

export default QuizQuestionCard;