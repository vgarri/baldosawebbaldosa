import React, {useState} from "react";

const About = () => {
  const [about, setAbout] = useState(false)







  return <>
  <section className="about">
  <h1 className="aboutTitle">About me</h1>
  <img className="profileImg" src="https://avatars.githubusercontent.com/u/146452699?v=4"></img>
  <article className="text">
  <p className="parrafo">Hello! I'm Victor Garritano. I'm a Fullstack Developer, working really hard to hone my skills in both frontend and backend development. I love learning about new technologies and constantly improving my coding abilities. 🚀</p>

  </article>
  </section>
  
  
  
  </>;
};

export default About;
