import React from 'react';
import MainHome from './pages/MainHome';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainHome />} />
            </Routes>
        </Router>
    );
};

export default App;
