import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from './components/Home.js';
import GenesisProject from './components/GenesisProject.js';

import reactGame from './images/reactGame.png';
import genesis from './images/genesis_cropped.jpg';
import backAccount from './images/bankAccount.png';
import bhramon from './images/bhramon_cropped.jpg';
import feedback from './images/feedback.png';
import mucisian from './images/mucisian.png';
import productly from './images/productly_cropped.png';
import AboutPage from './components/AboutPage.js';
import ContactPage from './components/ContactPage.js';
import rawHTML from './projects/HTMLList.js';
import MucisianProject from './components/MucisianProject.js';


function App() {

  // Set state display html in app. use id from handleclick to set array index
  // pass display html state to displayHtml component.

  // const [instaPics, setInstaPics] = useState([{}])

  const projects = [
    {
      img: mucisian,
      id: 1,
      name: "mucisian",
      html: rawHTML[1].html
    },
    {
      img: genesis,
      id: 2,
      name: "genesis",
      html: rawHTML[2].html

    },
    {
      img: reactGame,
      id: 3,
      name: "reactGame",
      html: rawHTML[3].html

    },
    {
      img: productly,
      id: 4,
      name: "productly",
      html: rawHTML[4].html


    },
    {
      img: feedback,
      id: 5,
      name: "feedback",
      html: rawHTML[5].html

    },
    {
      img: bhramon,
      id: 6,
      name: "bhramon",
      html: rawHTML[6].html

    },
    {
      img: backAccount,
      id: 7,
      name: "backAccount",
      html: rawHTML[7].html

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
      <Routes>
        <Route exact path="/" element={<Home calcAge={calcAge()} projects={projects} />} />
        <Route path="/components/aboutpage" element={<AboutPage />} />
        <Route path="/components/contactpage" element={<ContactPage />} />
        <Route path="/components/mucisianProject" element={<MucisianProject />} />
        <Route path="/components/genesisproject" element={<GenesisProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
