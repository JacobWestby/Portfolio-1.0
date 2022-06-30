import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

import Home from './components/Home.js';
import Nav from './components/reusableComponents/Nav.js';
import Footer from './components/reusableComponents/Footer.js';

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
import ProjectsPage from './components/ProjectsPage.js';
import DisplayHTML from './components/DisplayHTML.js';


function App() {
  const [projectName, setProjectName] = useState("");
  const [projectID, setProjectID] = useState("");

  // const [instaPics, setInstaPics] = useState([{}])

  const projects = [
    {
      img: mucisian,
      id: 1,
      name: "mucisian"
    },
    {
      img: genesis,
      id: 2,
      name: "genesis"

    },
    {
      img: reactGame,
      id: 3,
      name: "reactGame"

    },
    {
      img: productly,
      id: 4,
      name: "productly"

    },
    {
      img: feedback,
      id: 5,
      name: "feedback"

    },
    {
      img: bhramon,
      id: 6,
      name: "bhramon"

    },
    {
      img: backAccount,
      id: 7,
      name: "backAccount"

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

  const handleClick = (e) => {
    setProjectName(e.currentTarget.getAttribute('name'));
    setProjectID(e.currentTarget.id);
  };


  return (
    <BrowserRouter>
      <Nav menuBurger={menuBurger} />
      <Routes>
        <Route exact path="/" element={<Home calcAge={calcAge()} projects={projects} />} />
        <Route path="/components/aboutpage" element={<AboutPage />} />
        <Route path="/components/contactpage" element={<ContactPage />} />
        <Route path="/components/projectspage" element={<ProjectsPage projects={projects} handleClick={handleClick} />} />
        <Route path="/components/displayhtml" element={<DisplayHTML projectName={projectName} projectID={projectID} />} />
      </Routes>
      <Footer githubIcon={icons8Github} linkedinIcon={icons8Linkedin} />
    </BrowserRouter>
  );
}

export default App;
