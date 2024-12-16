import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from "./Home/Home";
import About from "./About/About"

const Main = () => {
  return <>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About/>} />
  </Routes>
  
  </>;
};

export default Main;
