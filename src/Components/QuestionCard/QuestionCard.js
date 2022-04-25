import React from "react";
import "./QuestionCard.css"

function QuestionCard( {question} ){

    const mappedQuestionTypes = question.type.map(type=><span className="type-label">{type}</span>)
    const mappedQuestionAnswers = question.answers.map(answer=><li>{answer}</li>)
    return(
        <>
        <section className="question-card">
            <header>
                <h4>{question.question}</h4>
            </header>
            
            <p><strong>Acceptable Answers:</strong></p>
            <ul>
                {mappedQuestionAnswers}
            </ul>
            <p><span style={{fontStyle: "italic"}}>Question Type:</span> {mappedQuestionTypes}</p>
        </section>
        </>
    )
}

export default QuestionCard;