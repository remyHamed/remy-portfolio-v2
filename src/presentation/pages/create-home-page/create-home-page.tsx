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
                            <div>
                                <div className="list">
                                    <p>
                                        Expertise full stack, de la création d’interfaces à la mise en place de structures backend.
                                    </p>
                                    <p>
                                        Expérience dans l’évolution d’architectures logicielles.
                                    </p>
                                    <p>
                                        Développement de fonctionnalités pour automatiser et optimiser des processus.
                                    </p>
                                    <p>
                                        Capacité à mener des projets techniques complexes.
                                    </p>
                                    <p>
                                        Développement de fonctionnalités pour automatiser et optimiser des processus.
                                    </p>
                                </div>
                                <div className="social-media-icons">
                                    
                                    <a href="https://www.linkedin.com/in/hamed-remy-9b8b3b1b2/">
                                        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
                                    </a>
                                    <a href="https://github.com/hamed-remy">
                                        <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
                                    </a>
                                    
                                    <a href="https://www.instagram.com/hamed_remy/">
                                        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"/>
                                    </a>
                                    
                                    <a href="https://www.twitter.com/hamedremy99/">
                                        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter"/>
                                    </a>

                                </div>
                            </div>
                            <div className="illustration_coding"></div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}