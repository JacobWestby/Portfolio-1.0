import { Route, Routes, BrowserRouter } from 'react-router-dom';

// COMPONENTS
import Home from './components/Home.js';
import GenesisProject from './components/GenesisProject.js';
import MucisianProject from './components/MucisianProject.js';
import ProductlyProject from './components/ProductlyProject.js';
import BhramonProject from './components/BhramonProject.js';

// IMAGES
import genesis from './images/genesis_cropped.jpg';
import bhramon from './images/bhramon_cropped.jpg';
import mucisian from './images/mucisian.png';
import productly from './images/productly_cropped.png';
import AboutPage from './components/AboutPage.js';
import ContactPage from './components/ContactPage.js';
import BackArrow from "./images/icons8-back-32.png";
import linnea from "./images/linnea.jpg";
import menuBurger from "./images/menuBurger.svg";

// TODO

// Fix bhramon project images || Complete
// Fix bhramon Quote size || Complete
// Add Testemonials -- Addition -- Add pictures for testemonials || Completed
// Add back to top button || Scrap
// Add back button on project pages || Complete
// Add contact form on About page || Scrap
// Add images to About page || Scrap
// Fix social links so they open in new tab || Complete
// Look up how to deploy react project from github to netlify || Complete
// Fix Links in the burger menu || Completed

// Fix background on contact for mobile || Complete
// Fix sizing issues for tablet || Complete
// Fonts?
// Fix post submit route for contact form

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
      img: productly,
      id: 3,
      name: "productly",
    },
    {
      img: bhramon,
      id: 4,
      name: "bhramon",
    },

  ];

  //  TESTEMONIALS ARRAY 
  const testemonials = [
    {
      name: "Linnea Andersson",
      img: linnea,
      text: `Jacob använder sin tid väl och finner kreativa lösningar på problem. 
      Det var både roligt och givande att arbeta i grupp med honom.`
    },


  ];

  // CALCULATE UP-TO-DATE AGE
  const calcAge = () => {
    const date = new Date()
    const currentAge = date.getFullYear() - 1993;

    return currentAge;
  };

  return (
    <BrowserRouter>
      {/* <GoBackBtn /> */}
      <Routes>
        <Route exact path="/" element={<Home menuBurger={menuBurger} calcAge={calcAge()} projects={projects} testemonials={testemonials} />} />
        <Route path="/components/aboutpage" element={<AboutPage menuBurger={menuBurger} />} />
        <Route path="/components/contactpage" element={<ContactPage menuBurger={menuBurger} />} />
        <Route path="/components/mucisianproject" element={<MucisianProject BackArrow={BackArrow} />} />
        <Route path="/components/genesisproject" element={<GenesisProject BackArrow={BackArrow} />} />
        <Route path="/components/productlyproject" element={<ProductlyProject BackArrow={BackArrow} />} />
        <Route path="/components/bhramonproject" element={<BhramonProject BackArrow={BackArrow} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
