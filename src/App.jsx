import './App.scss';
import NavBar from './components/Static/NavBar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState } from 'react';
import Footer from './components/Static/Footer';

function App() {
  
  return (
    <div className="App">
      <Router>
      <NavBar></NavBar>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
