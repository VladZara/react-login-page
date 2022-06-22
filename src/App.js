import "./App.css";
import {Details} from "./Components/Details/Details";
import Container2 from "./Components/Investment/Investment";
import Preferences from './Components/Preferences/Preferences';

import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Details/>} />
          <Route path="/page2" element={<Container2/>} />
          <Route path="/page3" element={<Preferences/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
