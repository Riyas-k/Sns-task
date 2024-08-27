import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import UserList from './components/UserList';
import './index.css'

const App = () => {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100">
                <Routes>
                    <Route path="/signup" element={< Signup />} />
                    <Route path="/login" element={< Login />} />
                    <Route path="/" element={<UserList />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
