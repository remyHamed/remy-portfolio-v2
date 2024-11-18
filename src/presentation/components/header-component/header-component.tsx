
import React from "react";
import "./styles.scss";

export const HeaderComponent: React.FC = () => {
  return (
  <header className="header" data-testid="header">
        <div id="logo-header-div">
            <img id="logo-header" src="assets\\logo\\logo.png"></img>
            <h3>Remy Hamed</h3>
        </div>
        <nav>
            <ul>
                <li><a href="index.html">Home</a><span className="dot"></span></li>
                <li><a href="pages\education_and_training\education_and_training.html">Diplôme et Formation</a><span className="dot"></span></li>
                <li><a href="pages\my_projects\my_projects.html">Mes Projets</a><span className="dot"></span></li>
                <li><a href="pages\interests\interests.html">Centre d'Intérêt</a><span className="dot"></span></li>
                <li><a href="pages\contact\contact.html">Contact</a><span className="dot"></span></li >
            </ul>
        </nav>
    </header>
  );
};