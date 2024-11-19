import { FooterComponent } from "../components/footer-component/footer-component"
import { HeaderComponent } from "../components/header-component/header-component"
import "./style.scss";

export const CreateHomePage: React.FC = () => {
    return(
        <>
            <HeaderComponent />
            <main>
                <div className="container">
                    <div className="div-1">
                        <div className="text-container">
                            <h1>Développeur full stack</h1>
                            <div >
                                Ayant terminé ma 5ᵉ année de master en architecture logicielle à l'E.S.G.I, je suis passionné par la conception de solutions logicielles innovantes. Mon parcours full stack, de la création d’interfaces à la mise en place de structures backend, démontre ma capacité à mener des projets techniques. J’ai contribué à l’évolution d’architectures avec MongoDB et des API REST, et développé des fonctionnalités pour automatiser des procédures. Toujours motivé par le partage et l’apprentissage, je vise à enrichir mes compétences et à m’investir dans des projets ambitieux
                            </div>
                        </div>
                    </div>
                    <div className="div-2">
                        <div>
                            <div>
                                <a href="https://www.linkedin.com/in/rhamed/"  target="_blank">
                                    <img src="assets/socialmedia/linkedin-logo-linkedin-icon-transparent-free-png.webp"/>
                                </a>
                                <a href="https://github.com/remyHamed"  target="_blank">
                                    <img src="assets/socialmedia/png-transparent-github-computer-icons-github-logo-monochrome-head-thumbnail.png" alt=""/>
                                </a>
                                <a href="https://x.com/dev_remy_"  target="_blank">
                                    <img src="assets/socialmedia/téléchargement.jpg"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="div-1">
                    <div className="text-container">
                        <h1>Expériences professionnelles</h1>
                        <div >
                            <h2>
                                Developpeur full stack
                                Entreprise Juridifeel
                            </h2>
                            <h3>
                                Septembre 2021 - Mars 2023
                                Angular 16 /Symfony 5.5 (php 8, php 7.2.5)
                            </h3>
                            <p>
                                Collecte des Besoins, établissement du cahier des charges, proposition de Solutions
                                Techniques :En tant que membre d'une start-up innovante, j'ai initié le projet dès ses prémices, en
                                étant en contact direct avec le fondateur, utilisateur de l'application. Cette interaction m'a permis
                                de saisir ses attentes et les exigences spécifiques du projet. J'ai activement participé à des sessions
                                de discussion et de brainstorming pour recueillir des besoins détaillés. Ensuite, j'ai proposé des
                                solutions techniques adaptées, assurant que l'application répondait parfaitement aux objectifs de
                                l'entreprise.
                            </p>
                            <p>
                                Collecte des Besoins, établissement du cahier des charges, proposition de Solutions
                                Techniques :En tant que membre d'une start-up innovante, j'ai initié le projet dès ses prémices, en
                                étant en contact direct avec le fondateur, utilisateur de l'application. Cette interaction m'a permis
                                de saisir ses attentes et les exigences spécifiques du projet. J'ai activement participé à des sessions
                                de discussion et de brainstorming pour recueillir des besoins détaillés. Ensuite, j'ai proposé des
                                solutions techniques adaptées, assurant que l'application répondait parfaitement aux objectifs de
                                l'entreprise.
                            </p>
                            <p>
                                Collecte et Centralisation des Données : Développement de fonctionnalités permettant de
                                recueillir des données via des API et de les centraliser dans une vue unique, fournissant des
                                informations exhaustives sur les entreprises.
                            </p>
                            <p>
                                Automatisation du Travail Juridique : Développement de fonctionnalités pour automatiser le
                                travail des juristes en gérant et en auto-complétant la documentation basée sur les informations
                                collectées, facilitant ainsi la relecture et la validation par les juristes.
                            </p>
                            <p>
                                Dans mon travail, j'ai été proactif en conseillant l'utilisation d'une base de données MongoDB
                                orientée document pour améliorer la performance. J'ai initié la transition de notre API vers les
                                standards REST pour une meilleure interopérabilité et intégration. J'ai structuré notre workflow en
                                proposant le développement agile et mené des actions de formation et sensibilisation pour
                                aligner l'équipe sur ces nouvelles pratiques, y compris la relecture de code et le pair programming.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <FooterComponent/>
        </>
    );
}