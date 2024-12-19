import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

export const HeaderComponent: React.FC<{}> = ():React.ReactNode => {
    return (
        <header data-testid="header">
            <h1>Remy Portfolio</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            <p>Home</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/education_and_training">
                            <p>Diplôme et Formation</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/my_projects" end>
                            <p>Mes Projets</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/interests">
                            <p>Centre d'Intérêt</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <p>Contact</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
