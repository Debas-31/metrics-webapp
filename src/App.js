import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/country" element={<DetailsPage />} />
    </Routes>
  );
}

export default App;
