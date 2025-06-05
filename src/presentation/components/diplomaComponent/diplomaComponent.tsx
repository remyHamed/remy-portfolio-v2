import mon_cv from "/src/file/cv_remy_hamed.pdf";


export const  DiplomaComponent: React.FC = () => {

    return (
        <div className="item-4-diploma">
            <div className="row">
                <div className="square">
                    <h2 className="year-diploma">
                        2022-2024
                    </h2>
                    <h1 className="title-diploma">
                        Master d'architecture logiciel, Informatique
                    </h1>
                    <h4 className="school">
                        École Supérieure de Génie Informatique
                    </h4>
                    <p className="item-4-pargraphe">
                        Le Mastère en Architecture des Logiciels de l'ESGI est une formation de deux ans visant à former des experts capables de concevoir, développer et gérer des applications logicielles robustes et évolutives. Ce programme met l'accent sur l'apprentissage pratique à travers des workshops, des projets professionnels et une alternance obligatoire, permettant aux étudiants d'acquérir une maîtrise avancée des langages de programmation tels que Java, C# et des technologies comme JEE et .NET.
                    </p>
                    <p
                        className="school-link"
                        onClick={
                            ()=> {
                                window.open(
                                    "https://www.esgi.fr/programmes/architecture-logiciels.html",
                                    "_blank"
                                )
                            }
                        }
                    >
                        @ESGI
                    </p>
                </div>
                <div className="square">
                    <h2 className="year-diploma">
                        2021-2022
                    </h2>
                    <h1 className="title-diploma">
                        Bachelor chef de projet logiciel et réseau, Informatique
                    </h1>
                    <h4 className="school">
                        École Supérieure de Génie Informatique
                    </h4>
                    <p className="item-4-pargraphe">
                        Le Bachelor en Architecture des Logiciels de l'ESGI est une formation intensive d'un an destinée aux personnes en reconversion professionnelle, titulaires d'un niveau Bac à Bac+2. Ce programme offre une solide base théorique et des compétences opérationnelles en conception, développement et déploiement d'applications multi-plateformes. Les étudiants maîtrisent les principaux langages de programmation tels que Java, PHP et JavaScript, et acquièrent des compétences en gestion de projets informatiques. 
                    </p>
                    <p
                        className="school-link"
                        onClick={
                            ()=> {
                                window.open(
                                    "https://www.esgi.fr/programmes/architecture-logiciels.html",
                                    "_blank"
                                )
                            }
                        }
                    >
                        @ESGI
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="square">
                    <h2 className="year-diploma">
                        2013-2016
                    </h2>
                    <h1 className="title-diploma">
                        Licence Histoire
                    </h1>
                    <h4 className="school">
                        Nanterre Paris Ouest
                    </h4>
                    <p className="item-4-pargraphe">
                        J'ai suivi une licence d'histoire à l'Université Paris Nanterre (Paris Ouest), où j'ai eu l'opportunité d'être formé par des professeurs remarquables tels que Didier Musiedlak, spécialiste du fascisme et du nazisme, et Hervé Inglebert. Leur enseignement m'a profondément marqué et m'a permis de développer une réflexion critique et une compréhension approfondie des enjeux historiques et politiques.
                    </p>
                    <p 
                        className="school-link"
                        onClick={
                            ()=> {
                                window.open(
                                    "https://formations.parisnanterre.fr/fr/formations-2025-2026/les-formations/licence-lmd-03/histoire-licence-JWQC346Z.html",
                                    "_blank"
                                )
                            }
                        }
                    >
                        @ParisNanterre
                    </p>
                </div>
                <div className="square">
                    <h2 className="year-diploma">
                        2010-2011
                    </h2>
                    <h1 className="title-diploma">
                        Baccalauréat science et technologie de la gestion option communication
                    </h1>
                    <h4 className="school">
                        EREA Toulouse Lautrec
                    </h4>
                    <p className="item-4-pargraphe">
                        J'ai obtenu un baccalauréat STG (Sciences et Technologies de la Gestion) au lycée Toulouse Lautrec, un établissement unique qui accueille à la fois des élèves valides et en situation de handicap. Cette immersion dans un environnement inclusif m'a permis de développer une grande ouverture d'esprit et une sensibilité particulière aux enjeux de l'accessibilité et de la diversité. En parallèle, j'ai acquis des compétences solides en gestion et en communication, me préparant ainsi à de futurs défis professionnels avec une approche humaine et bienveillante.
                    </p>
                    <p
                        className="school-link"
                        onClick={
                            ()=> {
                                window.open(
                                    "https://lyc-erea-toulouse-lautrec-vaucresson.ac-versailles.fr/",
                                    "_blank"
                                )
                            }
                        }
                    >
                        @EREA Toulouse Lautrec
                    </p>
                </div>
            </div>
            <div id="container-resume-button-item-4">
                <a className="resume-button-item-4"
                    href={mon_cv}
                    download
                >
                    Télécharger mon cv
                </a>
            </div>
        </div>
    );
};