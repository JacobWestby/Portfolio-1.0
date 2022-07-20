import { Route, Routes, BrowserRouter } from 'react-router-dom';

// COMPONENTS
import Home from './components/Home.js';
import GenesisProject from './components/GenesisProject.js';
import MucisianProject from './components/MucisianProject.js';
import ProductlyProject from './components/ProductlyProject.js';
import BhramonProject from './components/BhramonProject.js';

// IMAGES
import reactGame from './images/reactGame.png';
import genesis from './images/genesis_cropped.jpg';
import backAccount from './images/bankAccount.png';
import bhramon from './images/bhramon_cropped.jpg';
import feedback from './images/feedback.png';
import mucisian from './images/mucisian.png';
import productly from './images/productly_cropped.png';
import AboutPage from './components/AboutPage.js';
import ContactPage from './components/ContactPage.js';



function App() {

  // PROJECTS ARRAY 
  const projects = [
    {
      img: mucisian,
      id: 1,
      name: "mucisian",
    },
    {
      img: genesis,
      id: 2,
      name: "genesis",
    },
    {
      img: reactGame,
      id: 3,
      name: "reactGame",
    },
    {
      img: productly,
      id: 4,
      name: "productly",
    },
    {
      img: feedback,
      id: 5,
      name: "feedback",
    },
    {
      img: bhramon,
      id: 6,
      name: "bhramon",
    },
    {
      img: backAccount,
      id: 7,
      name: "backAccount",
    }
  ];

  // CALCULATE UP-TO-DATE AGE
  const calcAge = () => {
    const date = new Date()
    const currentAge = date.getFullYear() - 1993;

    return currentAge;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home calcAge={calcAge()} projects={projects} />} />
        <Route path="/components/aboutpage" element={<AboutPage />} />
        <Route path="/components/contactpage" element={<ContactPage />} />
        <Route path="/components/mucisianproject" element={<MucisianProject />} />
        <Route path="/components/genesisproject" element={<GenesisProject />} />
        <Route path="/components/productlyproject" element={<ProductlyProject />} />
        <Route path="/components/bhramonproject" element={<BhramonProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
