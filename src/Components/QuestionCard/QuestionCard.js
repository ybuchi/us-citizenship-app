import React from "react";
import "./QuestionCard.css"

function QuestionCard( {question} ){

    const mappedQuestionTypes = question.type.map(type=><span className="type-label">{type}</span>)
    const mappedQuestionAnswers = question.answers.map(answer=><li>{answer}</li>)
    return(
        <>
        <div className="question-card">
        <p>{question.question}</p>
        <p><strong>Acceptable Answers:</strong></p>
        <ul>
            {mappedQuestionAnswers}
        </ul>
        <p><span style={{fontStyle: "italic"}}>Question Type:</span> {mappedQuestionTypes}</p>
        </div>
        </>
    )
}

export default QuestionCard;