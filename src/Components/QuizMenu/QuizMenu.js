import React, { useState } from "react";
import "./QuizMenu.css"
import { useOutletContext } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function QuizMenu(){
    

    return(
        <>
        <div id="quiz-title" className="fade-in">
            <h1>Quiz Mode</h1>
            <h3>Test Your Knowledge</h3>
        </div>
        <Container>
        <Row>
            <Col sm={12} md={6}>
                <div className="quiz-type-card fade-in">
                    <h3>20 Questions</h3>
                    <p>Generates a set of random 20 questions. Answer at least 12 correctly to pass the quiz!</p>
                    <Button href="quiz/twenty-questions">Start This Quiz</Button>
                </div>
            </Col>
            <Col sm={12} md={6}>
                <div className="quiz-type-card fade-in">
                    <h3>Coming Soon</h3>
                    <p>New Quiz Modes Coming Soon!</p>
                </div>
            </Col>
        </Row>
    </Container>
    </>
    )
}

export default QuizMenu