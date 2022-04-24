import React from "react";
import questionsData from "../../Data/questions";
import QuestionCard from "../QuestionCard/QuestionCard";

function StudyPage(){
    const mappedQuestions = questionsData.map((question)=>{
        console.log(question)
        return(<QuestionCard question={question}/>)
    })
    return(
        <>
        <h1>Study Page</h1>
        {mappedQuestions}
        </>
    )
}

export default StudyPage;