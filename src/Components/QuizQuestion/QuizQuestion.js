import React, { useState } from "react";
import "./QuizQuestion.css"
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

function QuizQuestion({ question, handleNextQuestion, answer, setAnswer}){
    //Randomize a correct answer
    function generatePossibleAnswer(answersArray){
        const arrayIndex = Math.floor((Math.random() * answersArray.length))
        return answersArray[arrayIndex]
    }
    const randomPossibleAnswer = generatePossibleAnswer(question.answers)
    //Join the correct answer into the array of incorrect answers to display them
    const answerOptionsArray = question.wrongAnswers.concat(randomPossibleAnswer) 
    const randomizedOptionsArray = shuffle(answerOptionsArray);

    const mappedOptions = randomizedOptionsArray.map(option => {
        return <Form.Check type="checkbox" name="answer" value = {answer} onChange={handleChoiceChange} label={`${option}`}/>
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
        const current_value = e.target;
        console.log("Target Value", current_value);
        setAnswer(current_value);
    }

   
    return(
        <>
        <header className="quiz-question-title">{question.question}</header>
        <hr></hr>
        <Form onSubmit={handleNextQuestion}>
            <Form.Check onChange = {handleChoiceChange}>
            {mappedOptions}
            </Form.Check>
{/* [            <Form.Control type="text" name="answer" value={answer} onChange={handleTypingChange} placeholder="Your answer here"></Form.Control> */}
                
]            <Button type="submit">Submit</Button>
        </Form>
        
        </>
        
    )
}

export default QuizQuestion;