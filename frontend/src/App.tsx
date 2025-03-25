// frontend/src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SlavesList from './pages/SlavesList';
import SlaveDetail from './pages/SlaveDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SlavesList />} />
        <Route path="/slave/:id" element={<SlaveDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
