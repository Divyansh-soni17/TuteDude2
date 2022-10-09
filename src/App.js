import './App.css';
import Header from './component/Header.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './component/Home.js';
import Upperheader from './component/Upperheader';
function App() {
  return (
     <>
      <Router>
        <Upperheader/>
        <Header/>
        <Routes>
        <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
     </>
  );
}

export default App;
