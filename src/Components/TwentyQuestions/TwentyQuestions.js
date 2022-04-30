import React from "react";
import "./TwentyQuestions.css";
import { useOutletContext } from "react-router-dom";


function TwentyQuestions(){
    const [questionsData, setQuestionsData, generateThematicQuestionsArray] = useOutletContext();

    //Generate an array of all CIVCS questions
    const civicsQuestions = generateThematicQuestionsArray("civics");
    console.log(civicsQuestions);

    //A helper function to shuffle arrays
    function shuffle(array) {
        var m = array.length, t, i;
      
        // While there remain elements to shuffle…
        while (m) {
      
          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);
      
          // And swap it with the current element.
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
      
        return array;
      }

    //Define a function that fetches 20 random questions
    function fetchRandom20Questions(){
        //Generate an array of consecutive numbers that is the length fo the Questionsarray
        const baseArray = []
    
        for (let i = 1; i < civicsQuestions.length; i++){
            baseArray.push(i)
        }
        //Shuffle that array
        const shuffledBase = shuffle(baseArray)

        //Use the first 20 numbers in the new array
        const base20index = shuffledBase.slice(0,20)
        const final20questions = base20index.map(index=>civicsQuestions[index])
        console.log("20array", final20questions)

    }

    console.log(fetchRandom20Questions())

    return(
        <div id="twenty-questions-title">
            <h1> 20 Questions </h1>
        </div>
    )
}

export default TwentyQuestions;
