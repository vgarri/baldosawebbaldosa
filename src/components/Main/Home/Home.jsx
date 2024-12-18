import React from "react";
import { useContext } from "react";
import { menuContext } from "../../../context/menuContext";



const Home = () => {
  const { menuClick, setMenuClick, updateMenuClick } = useContext(menuContext);







  return <>

    <section className="desktop">
      <article className="title"><h1>Portfolio</h1></article>
      {menuClick ? <> <section className="StartMenu">
      <article className="barraLateral"><span className="textoWindowsLateral">vgarri</span></article>
          <section className="menuDesplegable">
          
          <div className="window-body">
            
            <article className="menuIcon">
            <img src="https://win98icons.alexmeub.com/icons/png/windows_update_large-1.png"></img><p>Update ‣</p>
            </article>
            <article className="menuIcon">
            <img src="https://win98icons.alexmeub.com/icons/png/console_prompt-0.png"></img><p> Run ‣</p>
            </article>
            <article className="menuIcon">
            <img src="https://win98icons.alexmeub.com/icons/png/help_book_cool-4.png"></img><p> Help ‣</p>
            </article>
            <article className="menuIcon">
            <img src="https://win98icons.alexmeub.com/icons/png/shut_down_cool-5.png"></img><p> Reset ‣</p>
            </article>
           
            
          </div>
          </section>
          
        


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
