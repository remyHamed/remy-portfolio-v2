import React, { useRef, useState } from "react";
import "./style.scss";
import logo from "/src/assets/logo/logo.png";
import { NavLink } from "react-router-dom";

export const HeaderComponent: React.FC = ():React.ReactNode => {
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
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                        <span className="dot"></span>
                    </li>
                    <li>
                        <NavLink to="/education_and_training">
                            Diplôme et Formation
                        </NavLink>
                        <span className="dot"></span>
                    </li>
                    <li>
                    <NavLink to="/my_projects" end>Mes Projets</NavLink>
                        <span className="dot"></span>
                    </li>
                    <li>
                        <NavLink to="/interests">Centre d'Intérêt</NavLink>
                        <span className="dot"></span>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
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
