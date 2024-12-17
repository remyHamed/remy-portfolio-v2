import React from "react";
import "./style.scss";
import home_icon from "/src/assets/icons/houme-removebg-preview.png";
import diploma_icon from "/src/assets/icons/diploma-xxl.png";
import projet_icon from "/src/assets/icons/projet (1).png";
import hobby_icon from "/src/assets/icons/loisir.png";
import contact_icon from "/src/assets/icons/communiquer.png";
import { NavLink } from "react-router-dom";

export const HeaderComponent: React.FC<{showLinks: Boolean}> = ( props ):React.ReactNode => {
    return (
        <header data-testid="header" className={`header-sidebar ${props.showLinks ? "active" : ""}`}>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            <img id="logo-header" src={home_icon} alt="Logo" />
                            <p>Home</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/education_and_training">
                            <img id="logo-header" src={diploma_icon} alt="Logo" />
                            <p>Diplôme et Formation</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/my_projects" end>
                        <img id="logo-header" src={projet_icon} alt="Logo" />
                            <p>Mes Projets</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/interests">
                            <img id="logo-header" src={hobby_icon} alt="Logo" />
                            <p>Centre d'Intérêt</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <img id="logo-header" src={contact_icon} alt="Logo" />
                            <p>Contact</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
