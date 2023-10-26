import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Tabs from './components/Tabs';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Navigate to="/dummyList" />} />
          <Route path="/dummyTable" element={<Tabs tabId="dummyTable" />} />
          <Route path="/dummyChart" element={<Tabs tabId="dummyChart" />} />
          <Route path="/dummyList" element={<Tabs tabId="dummyList" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
