import React from "react";
import "./QuestionCard.css"

function QuestionCard( {question} ){

    const mappedQuestionTypes = question.type.map(type=><span className="type-label">{type}</span>)
    return(
        <>
        <p>{question.question}</p>
        <p>{mappedQuestionTypes}</p>
        </>
    )
}

export default QuestionCard;