import React from "react";
import "./QuizQuestionCard.css";
import Button  from "react-bootstrap/Button";
import ResultsCard from "../ResultsCard/ResultsCard";
import QuizQuestion from "../QuizQuestion/QuizQuestion";

// A component that can be recycle for most/all Quiz modes

function QuizQuestionCard({ question, currentQuestion, setCurrentQuestion, setQuizIsFinished, quizIsFinished, score, setScore }){
    //A function that verifies the answer
    function verifyAnswer(answer){
        console.log(question.id)
        //If the answer is correct
        //Set a state in the TwentyQuestions page that tracks score
        if (question.answers.includes(answer)){
            setScore({...score, correct_answers: ++score.correct_answers})
        //If the answer is incorrect
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
            verifyAnswer(answer)
            setCurrentQuestion(nextQuestion)
        }
    }
    return(
        <div className="quiz-question-card">
            {quizIsFinished ? <ResultsCard score = {score} /> : <QuizQuestion currentQuestion={currentQuestion} 
                                                              setCurrentQuestion={setCurrentQuestion}
                                                              setQuizIsFinished={setQuizIsFinished}
                                                              quizIsFinished={quizIsFinished}
                                                              question={question}
                                                              handleNextQuestion={handleNextQuestion}/>}
             <p>{currentQuestion + 1} / 20</p>
        </div>
    )
}

export default QuizQuestionCard;