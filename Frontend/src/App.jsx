import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InstitutePage from './institute';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<InstitutePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
