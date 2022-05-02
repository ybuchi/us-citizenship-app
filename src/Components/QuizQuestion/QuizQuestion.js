import React, { useState } from "react";
import "./QuizQuestion.css"
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function QuizQuestion({ question, handleNextQuestion, answer, setAnswer}){
    //A state for the checkbox form
    const [checked, setChecked] = useState()

    function handleChecked(e){
        setChecked(e.currentTarget.checked)
    }
    //Randomize a correct answer. Returns an answer
    function generatePossibleAnswer(answersArray){
        const arrayIndex = Math.floor((Math.random() * answersArray.length))
        return answersArray[arrayIndex]
    }
    const randomPossibleAnswer = generatePossibleAnswer(question.answers)
    //Join the correct answer into the array of incorrect answers to display them
    const answerOptionsArray = question.wrongAnswers.concat(randomPossibleAnswer) 
    const randomizedOptionsArray = shuffle(answerOptionsArray);

    const mappedOptions = randomizedOptionsArray.map((option, index) => {
        return(
            <ToggleButton key={index}
                          id={`checkbox-${index}`}
                          type="checkbox"
                          checked = {checked}
                          onChange = {handleChecked}
                          >{option}</ToggleButton>
        )
    })

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

    function handleChoiceChange(e){
        const current_value = e.target.answer;
        console.log("Target Value", current_value);
        setAnswer(current_value);
    }

   
    return(
        <>
        <header className="quiz-question-title">{question.question}</header>
        <hr></hr>
        <Form onSubmit={handleNextQuestion}>
            <ButtonGroup>
                {mappedOptions}
            </ButtonGroup>
                
           <Button type="submit">Submit</Button>
        </Form>
        
        </>
        
    )
}

export default QuizQuestion;