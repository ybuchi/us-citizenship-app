import React, { useState, useEffect } from "react";
import "./QuizQuestion.css"
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function QuizQuestion({ question, possibleAnswers, handleNextQuestion, answer, setAnswer}){
    //A state for the checkbox form
    const [value, setValue] = useState("")

    function handleCheckBoxChange(val){
        setValue(val)
    }
    
    // const mappedOptions = possibleAnswers.map(answer => {
    //     return(
    //         <ToggleButton>{answer}</ToggleButton>
    //     )
    // })
    

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

   
    return(
        <>
        <header className="quiz-question-title">{question.question}</header>
        <hr></hr>
        <Form onSubmit={handleNextQuestion}>
            <ToggleButtonGroup type = "checkbox" value={value} onChange={handleCheckBoxChange}>
                {/* {mappedOptions} */}
            </ToggleButtonGroup>
                
           <Button type="submit">Submit</Button>
        </Form>
        
        </>
        
    )
}

export default QuizQuestion;