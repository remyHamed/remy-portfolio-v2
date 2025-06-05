import mon_cv from "/src/file/cv_remy_hamed.pdf";
import "./style.scss";
export const AboutMeComponent: React.FC = () :React.ReactNode => {
    return(
        <div className="item-2-about">
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
                                <td className="td-left" >
                                    téléphone
                                </td>
                                <td>
                                    06 66 27 11 79
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="container-resume-button">
                    <a
                        href={mon_cv}
                        download
                        className="resume-button"
                    >
                        Télécharger mon cv
                    </a>
                </div>
            </div>
        </div>
    );
};