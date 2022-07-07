import './App.scss';
import NavBar from './components/Static/NavBar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <NavBar></NavBar>
    </div>
  );
}

export default App;
