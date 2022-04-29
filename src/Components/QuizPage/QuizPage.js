import React from "react"
import "./QuizPage.css"
import { Container, Col, Row } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function QuizPage(){

    return(
        <>
        <Outlet/>
        </>
        
    )
}

export default QuizPage;