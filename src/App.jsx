import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useContext } from 'react';
import { menuContext } from './context/menuContext';

function App() {

  const [menuClick, setMenuClick] = useState(false);
  const [homeClick, setHomeClick] = useState(false);
  const updateMenuClick = (newClick) => {
    setMenuClick(newClick)
  }
  const updateHomeClick = (newest) => {
    setHomeClick(newest)
  }
  const menuClickState = {
    menuClick,
    homeClick,
    updateMenuClick,
    updateHomeClick
  }






  return <>
    <BrowserRouter>
    <menuContext.Provider value={menuClickState}>
      {/* <Header /> */}
      <Main />
      <Footer />
      </menuContext.Provider>
    </BrowserRouter>

  </>

}

export default App
