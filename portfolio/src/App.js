import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from './components/Home.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
