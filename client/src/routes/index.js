import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../components/Home';
import Register from '../components/Register';
import Login from '../components/Login';
import Profile from '../components/Profile';
import ErrorPage from '../components/Error';
import Header from '../layout/Header';

const Index = () => {
  return (
    <BrowserRouter> 
    <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>
    </BrowserRouter>
  );
};

export default Index;