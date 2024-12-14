import React from "react";

const Header = () => {
  return  <>
  <section className="window">
  <article className="title-bar">
    <div className="title-bar-text">Baldosa</div>
    <div className="title-bar-controls">
      <button aria-label="Minimize" />
      <button aria-label="Maximize" />
      <button aria-label="Close" />
    </div>
    </article>
  </section>
  </>
};

export default Header;
