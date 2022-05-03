import React, { useState, useEffect, useRef } from "react";
import "./QuizQuestion.css"
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { render } from "react-dom";

function QuizQuestion({ question, handleNextQuestion}){
    const [answer, setAnswer] = useState("")
    const optionsRef = useRef([]);
    const [optionsArray, setOptionsArray] = useState([])

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
        console.log("Our brand new optinos ref. Hope it works!!!", optionsRef.current);
        }
    
        generatePossibleAnswers()
        console.log(optionsRef.current)

    }, [question])

    console.log(optionsRef.current);

    function handleValueChange(e){
        console.log("FIRING")
        const checkbox_value = e.target.value
        setAnswer(checkbox_value);
        // setValue(val)
    }
    

    //Map the options into checkboxes
    const mappedOptions = optionsArray.map((possibleAnswer, index) => {return (
        <>
        <label key={index}>
            <input type="radio" key={index} name="answer-group" value={possibleAnswer} checked={possibleAnswer === answer} onChange={handleValueChange}/>
            {possibleAnswer}
        </label>
        <br/>
        </>
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