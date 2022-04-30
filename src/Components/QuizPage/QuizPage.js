import React from "react"
import "./QuizPage.css"
import { Container, Col, Row } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useOutletContext } from "react-router-dom";

function QuizPage(){
    const [questionsData, setQuestionsData] = useOutletContext();

    //Split the questions data into thematic arrays

    //A function that takes in a question type and generates an array of Question objects belonging to that question type
    function generateThematicQuestionsArray(questionType){
        const thematicQuestionsArray = questionsData.filter(question=>question.type.includes(questionType))
        return thematicQuestionsArray
    }

    return(
        <>
        <Outlet context={[questionsData, setQuestionsData, generateThematicQuestionsArray]}/>
        </>
        
    )
}

export default QuizPage;