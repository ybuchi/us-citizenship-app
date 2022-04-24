import React from "react";
import questionsData from "../../Data/questions";
import QuestionCard from "../QuestionCard/QuestionCard";
import { Button } from "react-bootstrap";

function StudyPage(){
    const mappedQuestions = questionsData.map((question)=>{
        console.log(question)
        return(<QuestionCard question={question}/>)
    })
    return(
        <>
        <h1>Study Page</h1>

        <div id="study-filter">
            <h4>Filter by Question Type</h4>
            <Button variant="light">history</Button>
            <Button variant="light">colonial history</Button>
            <Button variant="light">1800s</Button>
            <Button variant="light">recent history</Button>
            <Button variant="light"> civcs</Button>
            <Button variant="light">symbols and holidays</Button>
            <Button variant="light">flagged</Button>
        </div>
        

        {mappedQuestions}
        </>
    )
}

export default StudyPage;