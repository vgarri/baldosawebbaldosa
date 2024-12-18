import React, { useContext, useState, useEffect } from "react";
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


  // --------------------------- Reloj sin segundos

  let time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const [ctime, setTime] = useState(time);
  
  const UpdateTime = () => {
    // Actualiza solo la hora y los minutos
    time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setTime(time);
  };
  
  // Llama a UpdateTime cada segundo
  useEffect(() => {
    const interval = setInterval(UpdateTime, 1000);
    
    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);











  return <>
    <section className="footer">
      <section className="footerNav">

        <button className="default" onClick={handleClick}><span className="span"><img src="https://win98icons.alexmeub.com/icons/png/windows_slanted-1.png"></img>Start</span></button>

        {!homeClick ? "" : <button className="default" onClick={handleHomeClick}>Home</button>}
        {homeClick ? "" : <button className="default" onClick={handleAbout}>About</button>}
        <div className="clockDiv">
          <div className="status-bar">
          <p className="status-bar-field">{ctime}</p>
          </div>
        </div>

      </section>
    </section>
  </>;
};

export default Footer;
