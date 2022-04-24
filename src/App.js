import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';


function App() {
  return (
    <>
    <Navbar />
    <Outlet/>
    </>
  );
}

export default App;
