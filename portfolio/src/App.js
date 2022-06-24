import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from './components/Home.js';
import Nav from './components/reusableComponents/Nav.js';
import Footer from './components/reusableComponents/Footer.js';

import HTMLList from './projects/HTMLList.js';

import reactGame from './images/reactGame.png';
import genesis from './images/genesis.png';
import backAccount from './images/bankAccount.png';
import bhramon from './images/bhramon.png';
import feedback from './images/feedback.png';
import mucisian from './images/mucisian.png';
import productly from './images/productly.png';
import AboutPage from './components/AboutPage.js';
import ContactPage from './components/ContactPage.js';
import menuBurger from "./images/menuBurger.svg";
import icons8Github from "./images/icons8Github.svg";
import icons8Linkedin from "./images/icons8Linkedin.svg";
import { useEffect, useState } from 'react';
import ProjectsPage from './components/ProjectsPage.js';
import DisplayHTML from './components/DisplayHTML.js';


function App() {

  // const [instaPics, setInstaPics] = useState([{}])

  const projects = [
    {
      img: mucisian,
      id: 1,
      adress: "./projects/test.html"
    },
    {
      img: genesis,
      id: 2
    },
    {
      img: reactGame,
      id: 3
    },
    {
      img: productly,
      id: 4
    },
    {
      img: feedback,
      id: 5
    },
    {
      img: bhramon,
      id: 6
    },
    {
      img: backAccount,
      id: 7
    }

  ];

  const calcAge = () => {
    const date = new Date()
    const currentAge = date.getFullYear() - 1993;

    return currentAge;
  };

  // useEffect(() => {
  //   getGram();
  // }, []);

  // const getGram = async () => {
  //   const response = await fetch('https://graph.instagram.com/v11.0/andreahansson_/media');
  //   const data = await response.json()

  //   setInstaPics(data);
  // };

  // console.log(instaPics)



  return (
    <BrowserRouter>
      <Nav menuBurger={menuBurger} />
      <Routes>
        <Route exact path="/" element={<Home calcAge={calcAge()} projects={projects} />} />
        <Route path="/components/aboutpage" element={<AboutPage />} />
        <Route path="/components/contactpage" element={<ContactPage />} />
        <Route path="/components/projectspage" element={<ProjectsPage projects={projects} />} />
        <Route path="/components/displayhtml" element={<DisplayHTML />} />
      </Routes>
      <Footer githubIcon={icons8Github} linkedinIcon={icons8Linkedin} />
    </BrowserRouter>
  );
}

export default App;
