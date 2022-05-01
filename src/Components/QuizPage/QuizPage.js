import React, { useState } from "react"
import "./QuizPage.css"
import { Container, Col, Row } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useOutletContext } from "react-router-dom";

function QuizPage(){
    const [questionsData, setQuestionsData] = useOutletContext();
    
    return(
        <>
        <Outlet context={[questionsData, setQuestionsData]}/>
        </>
    )
}

export default QuizPage;