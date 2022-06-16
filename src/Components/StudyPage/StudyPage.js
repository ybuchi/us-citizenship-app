import React, { useState } from "react";
import "./StudyPage.css"
import QuestionCard from "../QuestionCard/QuestionCard";
import { Button } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";

function StudyPage(){
    //useOutletContext allows me to pass props from the "Outlet" component in the App.js page
    const [questionsData, setQuestionsData] = useOutletContext();
    const [filterState, setFilterState] = useState([]);

    //"filteredQuestions" currently takes care of all the filters EXCEPT the Special Criteria Filter, which we handle in a variable below
    const filteredQuestions = questionsData.filter((question) => {
        console.log("Is Special Criteria", question.isSpecialCriteria)
        const filterIncludesQuestionType = question.type.some(typeValue =>filterState.includes(typeValue))
        const flaggedInFilter = filterState.includes("flagged")
    //FILTER BUTTON LOGIC
        //If the filter state is empty, return everything
       if(filterState.length === 0){
           return question;
        //If the filter state does not include the Special Criteria
       }else if(!filterState.includes("special-criteria")){

        if(filterState.length === 1 && flaggedInFilter){
            if(question.isFlagged){
             return question
            }else{
                return false
            }
        }else if (flaggedInFilter && filterIncludesQuestionType){
            if(question.isFlagged){
                return question
            }else{
                return false
            }
        }else if (!flaggedInFilter && filterIncludesQuestionType){
            return question
        }

       }else if (filterState.includes("special-criteria")){

        if(filterState.length === 2 && flaggedInFilter){
            if(question.isFlagged && question.isSpecialCriteria){
             return question
            }else{
                return false
            }
        }else if (flaggedInFilter && filterIncludesQuestionType){
            if(question.isFlagged && question.isSpecialCriteria){
                return question
            }else{
                return false
            }
        }else if (!flaggedInFilter && filterIncludesQuestionType){
            return question.isSpecialCriteria ? question : false 
        }else{
            return question.isSpecialCriteria ? question : false
        }
       }
    })

    const mappedQuestions = filteredQuestions.map((question)=>{
        return(<li key={question.id}><QuestionCard  question={question}/></li>)
    })

    function handleFilter(e){
        //A function that handles the changes in the filterState.
        console.log(e.target.id)
        // Track whether the button is clicked or not (check if the filter state is included in the filterState array)
        if(!filterState.includes(e.target.name)){
            setFilterState([...filterState, e.target.name])
            e.target.className = `${e.target.className} filter-btn-clicked`
        }else if(filterState.includes(e.target.name)){
            const newFilterState = filterState.filter(value => value !== e.target.name)
            setFilterState(newFilterState)
            e.target.className = e.target.className.replace("filter-btn-clicked","")
        }
    }
        
    return(
        <>
        <header id="study-title">
        <img src={require("../images/study-book.png")} alt="study-book" style={{width: "100px"}}/>
            <h1>Study Session</h1>
            <h4>All of the questions laid out in front of you so you can study them until you are ready to take the quiz!</h4>
            <hr></hr>
            <h5>Think you got what it takes to become a naturalized American citizen? Test yourself!</h5>
            <Button href="/quiz" variant="light">Start Quiz</Button>
        </header>

        <div id="study-filter">
            <h4>Filter by Category</h4>
            <Button className="fitler-btn" id="filter-history" name="history" onClick={handleFilter} variant="light">history</Button>
            <Button className="fitler-btn" id="filter-chistory" name="colonial history" onClick={handleFilter} variant="light">colonial history</Button>
            <Button className="fitler-btn" id="filter-eighteenhundreds" name="1800s" onClick={handleFilter} variant="light">1800s</Button>
            <Button className="fitler-btn" id="filter-recenth" name="recent history"onClick={handleFilter} variant="light">recent history</Button>
            <Button className="fitler-btn" id="filter-civics" name="civics" onClick={handleFilter} variant="light"> civics</Button>
            <Button className="fitler-btn" id="filter-sandh" name="symbols and holidays" onClick={handleFilter} variant="light">symbols and holidays</Button>
            <Button className="fitler-btn" id="filter-sc" name="special-criteria" onClick={handleFilter} variant="light">special criteria</Button>
            <Button className="fitler-btn" id="filter-flagged" name="flagged" onClick={handleFilter} variant="light">flagged</Button>
            <article>
                <p>Use the filters above to review questions by category.</p>
                <p>Use the <strong>Flag</strong> button on the top right corner of each question card to mark questions you need to study.</p>
                <p>If you are 65 or older and have lived in the United States as a lawful permanent resident for 20 or more years, you only have to study the questions you will find using the <strong>special criteria</strong> filter above.</p>
            </article>
        </div>
        

        <ul style={{listStyle: "none", padding: "0"}}>
            {mappedQuestions.length === 0 ? <h3 id="no-results">No Results Found.</h3> : mappedQuestions}
        </ul>

        

        </>
    )
}

export default StudyPage;