import React, { useState } from "react";
import "./QuestionCard.css"
import Button from 'react-bootstrap/Button';
import { useOutletContext } from "react-router-dom";

function QuestionCard( {question} ){
    //States
    const [buttonIsFlagged, setButtonIsFlagged] = useState(false)
    const [questionsData, setQuestionsData] = useOutletContext();

    //Mapped Elements
    const mappedQuestionTypes = question.type.map((type, index)=><span key={index} className="type-label"><strong>{type.toUpperCase()}</strong></span>)
    const mappedQuestionAnswers = question.answers.map((answer, index)=><li key={index}>{answer}</li>)
    
    function handleIsFlagged(){
        // setButtonIsFlagged(!buttonIsFlagged)
        const changedFlagValue = !question.isFlagged
        const configObj = {
            method: "PATCH",
            headers:{
                "Content-Type": "application/json",
                "Accept" : "application/json"
            },
            body: JSON.stringify({isFlagged: changedFlagValue})
        }
        fetch(`${process.env.REACT_APP_API_URI}/questions/${question.id}`, configObj)
        .then(res=> res.json())
        .then(patchedQuestion => {
            const updatedData = questionsData.map((question)=>{
                if(question.id === patchedQuestion.id){
                    return patchedQuestion
                }else{
                    return question
                }
            })
            setQuestionsData(updatedData);
        })
    }
    return(
        <>
        <section className="question-card">
            <header>
                <h4 style={{paddingRight: "70px"}}>{question.question}</h4>
                {question.isFlagged ? <Button onClick={handleIsFlagged} style={{backgroundColor: "red"}} className="flag-btn">Unflag</Button> : <Button variant="secondary" onClick={handleIsFlagged} className="flag-btn">Flag</Button>}

            </header>
            <hr></hr>
            
            <p><strong>Acceptable Answers:</strong></p>
            <ul>
                {mappedQuestionAnswers}
            </ul>
            <br/>
            <hr></hr>
            <p>{mappedQuestionTypes}</p>
        </section>
        </>
    )
}

export default QuestionCard;