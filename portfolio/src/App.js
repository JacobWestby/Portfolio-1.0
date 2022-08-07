import { Route, Routes, BrowserRouter } from 'react-router-dom';

// COMPONENTS
import Home from './components/Home.js';
import GenesisProject from './components/GenesisProject.js';
import MucisianProject from './components/MucisianProject.js';
import ProductlyProject from './components/ProductlyProject.js';
import BhramonProject from './components/BhramonProject.js';
import GoBackBtn from './components/reusableComponents/GoBackBtn.js';

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
import jacobWestby from "./images/jacobWestby.jpg";
import BackArrow from "./images/icons8-back-32.png";

// TODO

// Fix bhramon project images || Complete
// Fix bhramon Quote size || Complete
// Add Testemonials 
// Add back to top button || Scrap
// Add back button on project pages || Complete
// Add contact form on About page 
// Fix social links so they open in new tab || Complete
// Look up how to deploy react project from github to netlify || Complete

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
      img: jacobWestby,
      text: `Jacob använder sin tid väl och finner kreativa lösningar på problem. 
      Det var både roligt och givande att arbeta i grupp med honom.`
    },
    {
      name: "Test McTester",
      img: jacobWestby,
      text: "omg så jävlabra",
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
        <Route exact path="/" element={<Home calcAge={calcAge()} projects={projects} testemonials={testemonials} />} />
        <Route path="/components/aboutpage" element={<AboutPage />} />
        <Route path="/components/contactpage" element={<ContactPage />} />
        <Route path="/components/mucisianproject" element={<MucisianProject BackArrow={BackArrow} />} />
        <Route path="/components/genesisproject" element={<GenesisProject BackArrow={BackArrow} />} />
        <Route path="/components/productlyproject" element={<ProductlyProject BackArrow={BackArrow} />} />
        <Route path="/components/bhramonproject" element={<BhramonProject BackArrow={BackArrow} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
