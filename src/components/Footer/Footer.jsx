import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { menuContext } from "../../context/menuContext";
import { useNavigate } from "react-router-dom";


const Footer = () => {
  const navigate = useNavigate();
  const { menuClick, setMenuClick, updateMenuClick, updateHomeClick, homeClick } = useContext(menuContext);

  const handleClick = () => {
    menuClick ? updateMenuClick(false) : updateMenuClick(true)
    console.log(menuClick)
  }
  const handleHomeClick = () => {
    homeClick ? updateHomeClick(false) : updateHomeClick(true)
    navigate("/")
  }
  const handleAbout = () => {
    homeClick ? updateHomeClick(false) : updateHomeClick(true)
    navigate('/about')
  }













  return <>
    <section className="footer">
      <section className="footerNav">

        <button className="default" onClick={handleClick}><span className="span"><img src="https://win98icons.alexmeub.com/icons/png/windows_slanted-1.png"></img>Start</span></button>

        {!homeClick ? "" : <button className="default" onClick={handleHomeClick}>Home</button>}
        {homeClick ? "" : <button className="default" onClick={handleAbout}>About</button>}
        <div className="clockDiv">
          <div className="status-bar">
            <p className="status-bar-field">vgarri© 2024</p>
          </div>
        </div>

      </section>
    </section>
  </>;
};

export default Footer;
