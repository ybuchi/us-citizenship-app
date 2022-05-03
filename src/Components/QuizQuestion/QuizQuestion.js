import React, { useState, useEffect, useRef } from "react";
import "./QuizQuestion.css"
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { render } from "react-dom";

function QuizQuestion({ question, currentQuestion, setCurrentQuestion, setQuizIsFinished, score, setScore}){
    const [answer, setAnswer] = useState("")
    const optionsRef = useRef([]);
    const [optionsArray, setOptionsArray] = useState([])

    //A use effect that will generate the list of Options
    useEffect(()=>{
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
    
        function generatePossibleAnswers(){
            //Shuffle the answers array
        const shuffledAnswersArray = shuffle(question.answers)
        //Join the first element of the shuffled answers array with the possible wrong answers
        const answerOptions = [shuffledAnswersArray[0]].concat(question.wrongAnswers)
        const shuffledAnswerOptions = shuffle(answerOptions)
    
        //Save the question options in a useRef so that it doesn't update when the component tries to re-render when choosing an answer
        setOptionsArray(shuffledAnswerOptions)
        }
    
        generatePossibleAnswers()

    }, [question])

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

    //Handles question submission and next question
    function handleNextQuestion(e){
        e.preventDefault();
        console.log("This is the answer", answer)

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

    function handleValueChange(e){
        console.log("FIRING")
        const checkbox_value = e.target.value
        setAnswer(checkbox_value);
    }

    //Map the options into checkboxes
    const mappedOptions = optionsArray.map((possibleAnswer, index) => {return (
        <label key={`label-${index}`}>
            <input type="radio" key={`input-${index}`} name="answer-group" value={possibleAnswer} checked={possibleAnswer === answer} onChange={handleValueChange}/>
            {possibleAnswer}
        </label>
        )
    })

    return(
        <>
        <header className="quiz-question-title">{question.question}</header>
        <hr></hr>
        <Form onSubmit={handleNextQuestion}>
                {mappedOptions.length === 0 ? <p>loading...</p> : mappedOptions}
           <Button type="submit">Submit</Button>
        </Form>
        
        </>
    )
}

export default QuizQuestion;