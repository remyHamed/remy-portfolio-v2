import React from "react";
import "./style.scss";

export const  HeaderComponent: React.FC = () => {

    let element : HTMLElement | null;

    return (
        <header data-testid="header">
            <h1>Remy Portfolio</h1>
            <nav>
                <ul className="header-list">
                    <li>
                        <button onClick={ () => {
                            element = document.getElementsByClassName("item-1-greating")[0] as HTMLElement;
                            if (element) {
                                element.scrollIntoView({ behavior: "smooth" });
                            }
                        }}>
                            <p>Home</p>
                        </button>
                    </li>
                    <li>
                        <button onClick={ () => {
                            element = document.getElementsByClassName("item-4-diploma")[0] as HTMLElement;
                            if (element) {
                                element.scrollIntoView({ behavior: "smooth" });
                            }
                        }}>
                            <p>Diplôme et Formation</p>
                        </button>
                    </li>
                    <li>
                        <button onClick={ () => {
                            element = document.getElementsByClassName("item-6-projects")[0] as HTMLElement;
                            if (element) {
                                element.scrollIntoView({ behavior: "smooth" });
                            }
                        }}>
                            <p>Mes Projets</p>
                        </button>
                    </li>
                    <li>
                        <button onClick={ () => {
                            element = document.getElementsByClassName("item-4-diploma")[0] as HTMLElement;
                            if (element) {
                                element.scrollIntoView({ behavior: "smooth" });
                            }
                        }}>
                            <p>Centre d'Intérêt</p>
                        </button>
                    </li>
                    <li>
                        <button onClick={ () => {
                            element = document.getElementsByClassName("item-4-diploma")[0] as HTMLElement;
                            if (element) {
                                element.scrollIntoView({ behavior: "smooth" });
                            }
                        }}>
                            <p>Contact</p>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
