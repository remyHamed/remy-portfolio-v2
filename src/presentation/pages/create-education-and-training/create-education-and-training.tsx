import { FooterComponent } from "../../../presentation/components/footer-component/footer-component";
import { HeaderComponent } from "../../../presentation/components/header-component/header-component";

export const CreateEducationAndTrainingPage: React.FC = ():React.ReactNode => {
    return(
        <>
        <HeaderComponent />
            <main>
                <div className="container-">
                    <div className="div-1">
                        <div className="text-container-education-and-training">
                            <h1>Master Architecture des Logiciels</h1>
                            <div className="progresse-bar-container">
                                <div className="progress-bar"></div>
                            </div>
                            <h3>
                                De septembre 2022 à septembre 2024
                            </h3>
                            <h3>
                                Ecole Supérieure de Génie Informatique
                            </h3>
                        </div>
                    </div>
                    <div className="div-1">
                        <div className="text-container">
                            <h1>Bachelor chef de projet logiciel et réseau</h1>
                            <div className="progresse-bar-container">
                                <div className="progress-bar"></div>
                            </div>
                            <h3>
                                De septembre 2019 à septembre 2022
                            </h3>
                            <h3>
                                Ecole Supérieure de Génie Informatique
                            </h3>
                        </div>
                    </div>
                    <div className="div-1">
                        <div className="text-container">
                            <h1>Licence histoire</h1>
                            <div className="progresse-bar-container">
                                <div className="progress-bar"></div>
                            </div>
                            <h3>
                                De septembre 2013 à juillet 2016 
                            </h3>
                            <h3>
                                Nanterre Paris Ouest Nanterre
                            </h3>
                        </div>
                    </div>
                    <div className="div-1">
                        <div className="text-container">
                            <h1>Baccalauréat science et technologie de la gestion option communication</h1>
                            <div className="progresse-bar-container">
                                <div className="progress-bar"></div>
                            </div>
                            <h3>
                                De septembre 2010 à septembre 2011
                            </h3>
                            <h3>
                                EREA Toulouse Lautrec
                            </h3>
                        </div>
                    </div>
                </div>
            </main>
            <FooterComponent/>
        </>
    );
};