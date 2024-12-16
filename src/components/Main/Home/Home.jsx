import React from "react";
import { useContext } from "react";
import { menuContext } from "../../../context/menuContext";



const Home = () => {
  const { menuClick, setMenuClick, updateMenuClick } = useContext(menuContext);







  return <>

    <section className="desktop">
      <article className="title"><h1>Portfolio</h1></article>
      {menuClick ? <> <section className="StartMenu">

        <div className="window">
          <div className="title-bar">
            <div className="title-bar-text">A Window With Stuff In It</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body">
            <p>There's so much room for activities!</p>
          </div>
        </div>


      </section>
      </> : ""}
      <article className="iconGrid">
        <article className="icon">
          <a href="https://madridvenues.netlify.app/" target="_blank" ><img src="https://win98icons.alexmeub.com/icons/png/directory_closed_cool-3.png" /></a>
          <p>Madrid Venues App</p>
        </article>
        <article className="icon">
          <a href="https://chatbot-ai-felgtbi.netlify.app/" target="_blank" ><img src="https://win98icons.alexmeub.com/icons/png/directory_closed_cool-3.png" /></a>
          <p>FELGTBI+ Chatbot AI</p>
        </article>
        <article className="icon">
          <a href="https://backendfinalproject-nbhl.onrender.com/" target="_blank" ><img src="https://win98icons.alexmeub.com/icons/png/directory_closed_cool-3.png" /></a>
          <p>Job Offers Portal</p>
        </article>
        <article className="icon">
          <a href="https://www.linkedin.com/in/v%C3%ADctor-garritano-p%C3%A9rez-80935921a/" target="_blank" ><img src="https://win98icons.alexmeub.com/icons/png/directory_closed_cool-3.png" /></a>
          <p>LinkedIn</p>
        </article>
        <article className="icon">
          <a href="https://github.com/vgarri" target="_blank" ><img src="https://win98icons.alexmeub.com/icons/png/directory_closed_cool-3.png" /></a>
          <p>GitHub</p>
        </article>





      </article>

      <article className="trashGrid">
        <article className="icon">
          <img src="https://win98icons.alexmeub.com/icons/png/recycle_bin_full_cool-0.png"></img>
          <p>Trash</p>
        </article>
      </article>



    </section>
  </>
};

export default Home;
