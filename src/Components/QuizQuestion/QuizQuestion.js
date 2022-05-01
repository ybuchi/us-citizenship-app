import React, { useState } from "react";
import "./QuizQuestion.css"
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

function QuizQuestion({ question, handleNextQuestion, answer, setAnswer}){
    
    function handleTypingChange(e){
        const current_value = e.target.value;
        setAnswer(current_value);
    }
   
    return(
        <>
        <header className="quiz-question-title">{question.question}</header>
        <hr></hr>
        <Form onSubmit={handleNextQuestion}>
            <Form.Label>Answer:</Form.Label>
            <Form.Control type="text" name="answer" value={answer} onChange={handleTypingChange} placeholder="Your answer here"></Form.Control>
            <Button type="submit">Submit</Button>
        </Form>
        
        </>
        
    )
}

export default QuizQuestion;