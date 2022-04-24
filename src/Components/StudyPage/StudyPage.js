import React from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import { Button } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";

function StudyPage(){
    //useOutletContext allows me to pass props from the "Outlet" component in the App.js page
    const [questionsData, setQuestionsData] = useOutletContext();

    const mappedQuestions = questionsData.map((question)=>{
        return(<QuestionCard key={question.id} question={question}/>)
    })

    function handleFilter(e){
        console.log(e.target.id)
    }
    return(
        <>
        <h1>Study Page</h1>

        <div id="study-filter">
            <h4>Filter by Question Type</h4>
            <Button id="filter-history" onClick={handleFilter} variant="light">history</Button>
            <Button id="filter-chistory" onClick={handleFilter} variant="light">colonial history</Button>
            <Button id="filter-eighteenhundreds" onClick={handleFilter} variant="light">1800s</Button>
            <Button id="filter-recenth" onClick={handleFilter} variant="light">recent history</Button>
            <Button id="filter-civics" onClick={handleFilter} variant="light"> civcs</Button>
            <Button id="filter-sandh" onClick={handleFilter} variant="light">symbols and holidays</Button>
            <Button id="filter-flagged" onClick={handleFilter} variant="light">flagged</Button>
        </div>

        {mappedQuestions}

        <h4>Ready to start the Quiz? Hit the button below!</h4>
        <Button variant="light">Start Quiz</Button>

        </>
    )
}

export default StudyPage;