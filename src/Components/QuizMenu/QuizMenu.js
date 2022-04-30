import React from "react";
import "./QuizMenu.css"
import { Col, Row, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function QuizMenu(){
    // Split array of questions into thematic arrays 
    // const historyArray 
    //Generate list of random numbers with math floor
    //Make 20 choices and push them into the array
    //Map over array and display them in the DOM

    return(
        <>
        <div id="quiz-title">
            <h1>Quiz Mode</h1>
            <h3>Test Your Knowledge</h3>
        </div>
        <Container>
        <Row>
            <Col sm={12} md={6}>
                <div className="quiz-type-card">
                    <h3>20 Questions</h3>
                    <p>Generates a set of random 20 questions. Answer at least 12 correctly to pass the quiz!</p>
                    <Button href="quiz/twenty-questions">Start This Quiz</Button>
                </div>
            </Col>
            <Col sm={12} md={6}>
                <div className="quiz-type-card">
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