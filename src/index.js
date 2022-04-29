import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import QuizPage from './Components/QuizPage/QuizPage';
import StudyPage from './Components/StudyPage/StudyPage';
import Home from './Components/Home/Home';
import QuizMenu from './Components/QuizMenu/QuizMenu';
import TwentyQuestions from './Components/TwentyQuestions/TwentyQuestions';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />}/>
        <Route path="study" element={<StudyPage/>}/>
        <Route path="quiz" element={<QuizPage />}>
          <Route index element={<QuizMenu />}/>
          <Route path="twenty-questions" element={<TwentyQuestions />}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
