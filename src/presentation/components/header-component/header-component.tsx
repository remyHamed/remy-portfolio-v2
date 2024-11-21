import React, { useRef, useState } from "react";
import "./style.scss";
import logo from "/src/assets/logo/logo.png";

export const HeaderComponent: React.FC = () => {
    const divRef = useRef<HTMLDivElement | null>(null); 
    const [showlinks, setShowlinks] = useState(false);

    const handleShowLinks = () => {
        const newShowLinks = !showlinks;
        setShowlinks(newShowLinks);

        if (!divRef.current) return;
        
        if (newShowLinks) {
            divRef.current.style.backgroundColor = "black";
            divRef.current.style.left = "0";
            divRef.current.style.transition = "all 0.3s ease-in-out";
            divRef.current.style.width = "100%";
        } else {
            divRef.current.style.backgroundColor = "transparent";
            divRef.current.style.left = "-110%";
        }
    };

    return (
        <header ref={divRef} data-testid="header">
            <div id="logo-header-div">
                <img id="logo-header" src={logo} alt="Logo" />
                <h3>Remy Hamed</h3>
            </div>
            <nav className={`${showlinks ? "show-header" : "hide-header"}`}>
                <ul>
                    <li>
                        <a href="index.html">Home</a>
                        <span className="dot"></span>
                    </li>
                    <li>
                        <a href="pages/education_and_training/education_and_training.html">
                            Diplôme et Formation
                        </a>
                        <span className="dot"></span>
                    </li>
                    <li>
                        <a href="pages/my_projects/my_projects.html">Mes Projets</a>
                        <span className="dot"></span>
                    </li>
                    <li>
                        <a href="pages/interests/interests.html">Centre d'Intérêt</a>
                        <span className="dot"></span>
                    </li>
                    <li>
                        <a href="pages/contact/contact.html">Contact</a>
                        <span className="dot"></span>
                    </li>
                </ul>
            </nav>
            <div className="navbar_burger" onClick={handleShowLinks}>
                <div className="burger-bar"></div>
                <div className="burger-bar"></div>
                <div className="burger-bar"></div>
            </div>
        </header>
    );
};
