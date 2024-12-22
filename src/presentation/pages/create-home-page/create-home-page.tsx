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
                            <table className="tab-list">
                                <tbody>
                                    <tr className="tab-list-element">
                                        <td className="td-left">Name:</td>
                                        <td  className="td-right">Rémy Hamed</td>
                                    </tr>
                                    <tr className="tab-list-element">
                                        <td className="td-left" >Date de naissance:</td>
                                        <td>12/01/1993</td>
                                    </tr>
                                    <tr className="tab-list-element">
                                        <td className="td-left">Ville:</td>
                                        <td>Puteaux</td>
                                    </tr>
                                    <tr className="tab-list-element">
                                        <td className="td-left">Zip code:</td>
                                        <td>92800</td>
                                    </tr>
                                    <tr className="tab-list-element">
                                        <td className="td-left" >Email:</td>
                                        <td>hamedremy@hotmail.fr</td>
                                    </tr>
                                    <tr className="tab-list-element">
                                        <td className="td-left" >téléphone</td>
                                        <td>06 66 27 11 79</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <button className="resume-button">Télécharger mon cv</button>
                        </div>
                    </div>
                </div>
                <div className="item-3">
                    <h1 className="item-3-back">Resume</h1>
                    <div className="item-3-front">
                        <h1 className="item-3-title">Resume</h1>
                        <p  className="item-3-front-paragraphe">
                            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                        </p>
                    </div>
                </div>
                <div className="item-4">
                    <div className="row">
                        <div className="square">
                            <h2 className="year-diploma">
                                2014-2015
                            </h2>
                            <h1 className="title-diploma">
                                Master Degree of Design
                            </h1>
                            <h4 className="school">
                                Cambridge University
                            </h4>
                            <p className="item-4-pargraphe">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolores quas, tenetur accusantium facilis delectus magni nobis vero. Maiores non expedita magni ab culpa, vero consequatur natus soluta eum ratione.
                            </p>
                        </div>
                        <div className="square">
                            <h2 className="year-diploma">
                                2014-2015
                            </h2>
                            <h1 className="title-diploma">
                                Master Degree of Design
                            </h1>
                            <h4 className="school">
                                Cambridge University
                            </h4>
                            <p className="item-4-pargraphe">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolores quas, tenetur accusantium facilis delectus magni nobis vero. Maiores non expedita magni ab culpa, vero consequatur natus soluta eum ratione.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="square">
                            <h2 className="year-diploma">
                                2014-2015
                            </h2>
                            <h1 className="title-diploma">
                                Master Degree of Design
                            </h1>
                            <h4 className="school">
                                Cambridge University
                            </h4>
                            <p className="item-4-pargraphe">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolores quas, tenetur accusantium facilis delectus magni nobis vero. Maiores non expedita magni ab culpa, vero consequatur natus soluta eum ratione.
                            </p>
                        </div>
                        <div className="square">
                            <h2 className="year-diploma">
                                2014-2015
                            </h2>
                            <h1 className="title-diploma">
                                Master Degree of Design
                            </h1>
                            <h4 className="school">
                                Cambridge University
                            </h4>
                            <p className="item-4-pargraphe">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolores quas, tenetur accusantium facilis delectus magni nobis vero. Maiores non expedita magni ab culpa, vero consequatur natus soluta eum ratione.
                            </p>    
                        </div>
                    </div>
                    <div>
                        <button className="resume-button-item-4">Télécharger mon cv</button>
                    </div>
                </div>
            </main>
        </>
    );
}