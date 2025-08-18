import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Agendamento from './pages/Agendamento';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Agendamento />} />
            </Routes>
        </Router>
    );
}

export default App;
