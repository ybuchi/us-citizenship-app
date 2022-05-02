import React, { useState } from "react";
import "./QuizQuestionCard.css";
import Button  from "react-bootstrap/Button";
import ResultsCard from "../ResultsCard/ResultsCard";
import QuizQuestion from "../QuizQuestion/QuizQuestion";

// A component that can be recycle for most/all Quiz modes

function QuizQuestionCard({ question, currentQuestion, setCurrentQuestion, setQuizIsFinished, quizIsFinished, score, setScore }){
    const [answer, setAnswer] = useState("")
    //A function that verifies the answer
    function verifyAnswer(answer){

        //If the answer is correct
        //checking the array of possible answers. If what the user typed matches a value in the answers array:
        if (question.answers.includes(answer)){
            //Update the correct_answers in the Score state
            setScore({...score, correct_answers: ++score.correct_answers})
        //If the answer is incorrect, make a fetch call to flag the question
        }else{
            console.log("QuestionID", question.id)
            const configObj = {
                method : "PATCH",
                headers : {
                    "Content-Type" : "application/json",
                    "Accepts" : "application/json"
                },
                body : JSON.stringify({isFlagged : true})

            }
            setScore({...score, incorrect_answers: ++score.incorrect_answers})
            //make a fetch call to patch database and flag the question
            fetch(`http://localhost:3001/questions/${question.id}`, configObj)
            .then(res => res.json())
            .then(updatedQuestion => console.log(updatedQuestion));
        }
    }
    function handleNextQuestion(e){
        e.preventDefault();
        const answer = e.target.answer.value 

        //If it's the last question
        if (currentQuestion === 19){
            verifyAnswer(answer)
            setQuizIsFinished(true);
        //Otherwise:
        }else{
            const nextQuestion = ++currentQuestion
            //Check answerf
            verifyAnswer(answer);
            setCurrentQuestion(nextQuestion);
        
        }
        //Reset Forms
        setAnswer("");
        
    }
    return(
        <div className="quiz-question-card">
            {quizIsFinished ? <ResultsCard score = {score} /> : <QuizQuestion currentQuestion={currentQuestion} 
                                                              setCurrentQuestion={setCurrentQuestion}
                                                              setQuizIsFinished={setQuizIsFinished}
                                                              quizIsFinished={quizIsFinished}
                                                              question={question}
                                                              handleNextQuestion={handleNextQuestion}
                                                              answer = {answer}
                                                              setAnswer = {setAnswer}/>}
             <p>{currentQuestion + 1} / 20</p>
        </div>
    )
}

export default QuizQuestionCard;