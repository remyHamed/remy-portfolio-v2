import { HeaderComponent } from "../../components/header-component/header-component";
import "./style.scss";

export const CreateHomePage: React.FC = () :React.ReactNode => {

    return(
        <>
            <HeaderComponent />
            <main className="container-home" >
                <div className="item-1">
                    <div className="text-greeting-container">
                        <span className="greeting">BONJOUR !</span>
                        <div className="white-text">
                            Je suis 
                            <span className="yellow-text"> Remy Hamed</span>
                            , développeur front-end et back-end.
                        </div>
                    </div>
                    <div className="illustration_coding">

                    </div>
                </div>
                <div className="item-2">
                    <div className="vertical-coding"></div>
                    <div className="text-container-about">
                        <h1 className="back">A propos</h1>
                        <div className="front">
                            <h1>A propos de moi</h1>
                            <p>
                                Coder, c'est écrire des histoires invisibles que seuls les ordinateurs savent lire, mais qui changent le monde entier.
                            </p>
                        </div>
                        <div className="about-me-list-container">
                            <ul className="about-me-list">
                                <li>
                                    <span>
                                        Name:
                                    </span>
                                    <span>
                                        Rémy Hamed
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Date de naissance:
                                    </span>
                                    <span>
                                        12/01/1993
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Ville:
                                    </span>
                                    <span>
                                        Puteaux
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Zip code:
                                    </span>
                                    <span>
                                        92800
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Email:
                                    </span>
                                    <span>
                                        hamedremy@hotmail.fr
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        téléphone:
                                    </span>
                                    <span>
                                        06 66 27 11 79
                                    </span>
                                </li>   
                            </ul>
                        </div>
                        <div>
                            <button>Télécharger mon cv</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}