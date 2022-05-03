import React from "react";
import Button from "react-bootstrap/Button";
import { Container, Col, Row } from "react-bootstrap";
import "./ResultsCard.css"

function ResultsCard({score}){
    function determinePass(){
        if (score.correct_answers === 20){
            //return a component PERFECT SCORE
            return(
                <p>Congratulations! You Got a Perfect Score!</p>
            )
        }else if(score.correct_answers >= 12 && score.correct_answers < 20){
            //return a component YOU PASSED, BUT YOU GOT TO STUDY SOME QUESTIONS
            return <p>With {score.correct_answers} / 20 correct answers, you'd have passed the test! But here are some questions to review: </p>
        }else{
            //Return YOU DIDN'T PASS, STUDY MORE
            return <p>Don't worry! You'll get there. In the meantime, here are some questions you can study:</p>
        }
    }
    return(
        <>
            <h1>Summary of Results</h1>
            <Container>
                <Row>
                    <Col>
                        <h3>Correct Answers</h3>
                        <h3>{score.correct_answers}</h3>
                    </Col>
                    <Col>
                        <h3>Incorrect Answers</h3>
                        <h3>{score.incorrect_answers}</h3>
                    </Col>
                </Row>
                {determinePass()}
            </Container>
            
            <Button variant="dark" className="quiz-end-btn" href="/quiz">Back to Quiz Menu</Button>
            <Button variant="success" className="quiz-end-btn">Restart</Button>
            <Button variant="secondary" className="quiz-end-btn" href="/">Back to Home Page</Button>
        </>
    )
}
export default ResultsCard;