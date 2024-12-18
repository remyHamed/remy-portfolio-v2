import { useState } from "react";
import { HeaderComponent } from "../../components/header-component/header-component";
import "./style.scss";

export const CreateHomePage: React.FC = () :React.ReactNode => {

    const [showlinks, setShowlinks] = useState(false);

    const handleShowLinks = () => {
        setShowlinks((showlinks) => !showlinks);
    }

    return(
        <>
            <HeaderComponent showLinks={showlinks} />
            <main className="container-home" >
                <div className="navbar_burger" onClick={handleShowLinks}>
                    <div className="burger-bar"></div>
                    <div className="burger-bar"></div>
                    <div className="burger-bar"></div>
                </div>
                <div>
                    <h3 className="title-home">Rémy Hamed</h3>
                </div>
                <div  className="home-div">
                    <div className="home-div-container">
                        <h3>Développeur full stack</h3>
                        <p className="home-paragraphe">
                            Passionné par la conception de solutions logicielles innovantes, je suis diplômé d’un master en architecture logicielle à l’E.S.G.I. Mon objectif est de contribuer à des projets ambitieux tout en enrichissant mes compétences.
                        </p>
                        <div className="home-list">
                            <p>
                                Expertise full stack, de la création d’interfaces à la mise en place de structures backend.
                            </p>
                            <p>
                                Expérience dans l’évolution d’architectures logicielles avec MongoDB et des API REST.
                            </p>
                            <p>
                                Développement de fonctionnalités pour automatiser et optimiser des processus.
                            </p>
                            <p>
                                Capacité à mener des projets techniques complexes avec rigueur et créativité.
                            </p>
                            <p>
                                Développement de fonctionnalités pour automatiser et optimiser des processus.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}