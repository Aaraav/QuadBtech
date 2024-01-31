import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Summary from './Components/Summary';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
       
<Route path='/' element={<Home/>}/>
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
