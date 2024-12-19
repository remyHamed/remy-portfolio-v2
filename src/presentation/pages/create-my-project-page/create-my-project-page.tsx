import { HeaderComponent } from "../../components/header-component/header-component";
import "./style.scss";

export const CreateMyProjectPage: React.FC = () :React.ReactNode => {
    return(
        <>
            <HeaderComponent />
            <main>
              <div className="container-my-project">
                <div className="div-1">
                    <div className="text-container">
                        <h1>Projet Hackathon : Application en réalité augmentée</h1>
                        <div className="progresse-bar-container">
                            <div className="progress-bar"></div>
                        </div>
                        <h3>
                            Développeur API  NestJS | Une semaine | 2ème place 
                        </h3>
                        <p>
                            Détails : Création d'une application permettant de poser un modèle 3D de plante dans un lieu 
                            choisi, puis un vote parmi les utilisateurs déterminait quelle plante serait mise à cet endroit.
                        </p>
                    </div>
                    <div className="text-container">
                        <h1>Projet Annuel : Développement d'une plateforme de jeux</h1>
                        <div className="progresse-bar-container">
                            <div className="progress-bar"></div>
                        </div>
                        <h3>
                            Développeur principal | Angular | API Platform
                        </h3>
                        <p>
                            Détails : Développement d'une plateforme permettant de recevoir et d'intégrer des jeux créés
                            par les utilisateurs
                        </p>
                        <div className="github-img-link-container">
                            <div>
                                <a href="https://github.com/Grand-Paris-Courses/grandparis-back" target="_blank">
                                    <img className="github-img-link" src="/assets/github-6.webp" alt="Backend Repo" ></img>
                                </a>
                                <h4>frontend</h4>
                            </div>
                            <div>
                                <a href="https://github.com/Game7-ESGI-2023-PA/game7-api" target="_blank">
                                    <img className="github-img-link" src="/assets/github-6.webp" alt="Frontend Repo"></img>
                                </a>
                                <h4>Backend</h4>
                            </div>
                        </div>
                    </div>
                    <div className="text-container">
                        <h1>Projet Annuel : Gestion et Coordination de Coursiers</h1>
                        <div className="progresse-bar-container">
                            <div className="progress-bar"></div>
                        </div>
                        <h3>
                            Développeur Principal | Flutter (Dart 3.3.3) | Spring Boot (Java 21)
                        </h3>
                        <p>
                            Détails : Développement d'une application complète pour la gestion et la coordination de coursiers,
                            incluant une interface frontend en Flutter et un backend en Spring Boot. Plusieurs dépôts GitHub ont
                            été utilisés pour séparer les composants de l'application.
                        </p>
                        <div className="github-img-link-container">
                            <div>
                                <a href="https://github.com/Grand-Paris-Courses/grandparis-coursier" target="_blank">
                                    <img className="github-img-link" src="/assets/github-6.webp" alt="Frontend Repo"></img>
                                </a>
                                <h4>Frontend</h4>
                            </div>
                            <div>
                                <a href="https://github.com/Grand-Paris-Courses/grandparis-back" target="_blank">
                                    <img className="github-img-link" src="/assets/github-6.webp" alt="Backend Repo"></img>
                                </a>
                                <h4>Backend</h4>
                            </div>
                        </div>
                    </div>
                    <div className="text-container">
                        <h1>Projet d'Apprentissage par Renforcement</h1>
                        <div className="progresse-bar-container">
                            <div className="progress-bar"></div>
                        </div>
                        <h3>
                            Développement et entraînement d'une IA pour un jeu | Développeur et chercheur en IA | Python
                        </h3>
                        <p>
                            Détails : Codage d'un jeu "shoot them up" en Python et entraînement d'une intelligence
                            artificielle utilisant l'algorithme avec la Q-table.
                        </p>
                        <div className="github-img-link-container">
                            <div>
                                <a href="https://github.com/remyHamed/shoothemUp" target="_blank">
                                    <img className="github-img-link" src="/assets/github-6.webp" alt="Frontend Repo"></img>
                                </a>
                                <h4>App</h4>
                            </div>
                        </div>
                    </div>
                    <div className="text-container">
                        <h1>Projet Gherkin | Développeur | Java</h1>
                        <div className="progresse-bar-container">
                            <div className="progress-bar"></div>
                        </div>
                        <p>
                            Développement de tests automatisés en Gherkin pour valider les fonctionnalités d'une
                            application Java
                        </p>
                        <p>
                            Création de scénarios de test pour assurer la qualité et la conformité du projet.
                        </p>
                        <div className="github-img-link-container">
                            <div>
                                <a href="https://github.com/ShanAZIZ/EsgiBddGameOfLife" target="_blank">
                                    <img className="github-img-link" src="/assets/github-6.webp" alt="Frontend Repo"></img>
                                </a>
                                <h4>App</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            </main>
        </>
    );
}