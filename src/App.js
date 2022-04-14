import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import StateListing from './components/StateListing';
import PlacesToVisit from './components/PlacesToVisit';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
            <Routes>
                <Route path = "/" element = {<StateListing />} />
                <Route path = "/states/place-to-visit/:stateId" element = {<PlacesToVisit />} />
                <Route> 404 Not Found!</Route>
            </Routes>
      </Router>
    </div>
  );
}

export default App;
