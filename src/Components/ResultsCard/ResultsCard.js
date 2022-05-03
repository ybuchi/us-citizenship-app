import React from "react";
import Button from "react-bootstrap/Button";
import { Container, Col, Row } from "react-bootstrap";

function ResultsCard({score}){
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
            </Container>
            
            <Button href="/quiz">Back to Quiz Menu</Button>
            <Button>Restart</Button>
            <Button href="/">Back to Home Page</Button>
        </>
    )
}
export default ResultsCard;