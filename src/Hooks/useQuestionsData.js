import { useState, useEffect } from "react";

function useQuestionsData(){

    const [questionsData, setQuestionsData] = useState([])

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URI}/questions`)
        .then(res => res.json())
        .then(questionsData => setQuestionsData(questionsData))
    }, [])

    return [questionsData, setQuestionsData];

}
export default useQuestionsData;