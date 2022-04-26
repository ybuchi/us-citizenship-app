import React, { useState } from "react";
import "./StudyPage.css"
import QuestionCard from "../QuestionCard/QuestionCard";
import { Button } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";

function StudyPage(){
    //useOutletContext allows me to pass props from the "Outlet" component in the App.js page
    const [questionsData, setQuestionsData] = useOutletContext();
    const [filterState, setFilterState] = useState([]);

    const filteredQuestions = questionsData.filter((question) => {
       //For every question object, if its type contains any values in the filterState type, render it
       if(filterState.length === 0){
           return question;
       }else if(question.type.some(typeValue => filterState.includes(typeValue))){
           return question;
       }else{
           return false
       }
    })
    console.log("FilteredQuestions", filteredQuestions);

    const mappedQuestions = filteredQuestions.map((question)=>{
        return(<li><QuestionCard key={question.id} question={question}/></li>)
    })

    function handleFilter(e){
        console.log(e.target.id)
        // Track whether the button is clicked or not (check if the filter state is included in the filterState array)
        if(!filterState.includes(e.target.name)){
            setFilterState([...filterState, e.target.name])
            e.target.className = `${e.target.className} filter-btn-clicked`
        }else if(filterState.includes(e.target.name)){
            const newFilterState = filterState.filter(value => value !== e.target.name)
            setFilterState(newFilterState)
            e.target.className = e.target.className.replace("filter-btn-clicked","")
        }else{
            setFilterState(questionsData);
        }
    }
        
    return(
        <>
        <header id="study-title">
            <h1>Study Page</h1>
            <h4>All of the questions laid out in front of you so you can study them until you are ready to take the quiz!</h4>
        </header>
       <hr></hr>
        <div id="study-filter">
            <h4>Filter by Category</h4>
            <Button className="fitler-btn" id="filter-history" name="history" onClick={handleFilter} variant="light">history</Button>
            <Button className="fitler-btn" id="filter-chistory" name="colonial history" onClick={handleFilter} variant="light">colonial history</Button>
            <Button className="fitler-btn" id="filter-eighteenhundreds" name="1800s" onClick={handleFilter} variant="light">1800s</Button>
            <Button className="fitler-btn" id="filter-recenth" name="recent history"onClick={handleFilter} variant="light">recent history</Button>
            <Button className="fitler-btn" id="filter-civics" name="civics" onClick={handleFilter} variant="light"> civcs</Button>
            <Button className="fitler-btn" id="filter-sandh" name="symbols and holidays" onClick={handleFilter} variant="light">symbols and holidays</Button>
            <Button className="fitler-btn" id="filter-flagged" name="flagged" onClick={handleFilter} variant="light">flagged</Button>
        </div>
        <hr></hr>
        <ol>
            {mappedQuestions}
        </ol>

        <h4>Ready to start the Quiz? Hit the button below!</h4>
        <Button variant="light">Start Quiz</Button>

        </>
    )
}

export default StudyPage;