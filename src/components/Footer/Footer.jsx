import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { menuContext } from "../../context/menuContext";
import { useNavigate } from "react-router-dom";


const Footer = () => {
  const navigate = useNavigate();
  const { menuClick, setMenuClick, updateMenuClick } = useContext(menuContext);

  const handleClick = () => {
    menuClick ? updateMenuClick(false) : updateMenuClick(true)
    console.log(menuClick)
  }













  return <>
    <section className="footer">
      <section className="footerNav">
        <button className="default" onClick={handleClick}><span className="span"><img src="https://win98icons.alexmeub.com/icons/png/windows_slanted-1.png"></img>Start</span></button>
        <button className="default" onClick={() => { navigate("/") }}>Home</button>
        <button className="default" onClick={() => { navigate("/about") }}>About</button>

      </section>
    </section>
  </>;
};

export default Footer;
