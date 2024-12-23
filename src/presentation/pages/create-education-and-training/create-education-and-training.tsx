import { HeaderComponent } from "../../../presentation/components/header-component/header-component";

export const CreateEducationAndTrainingPage: React.FC = ():React.ReactNode => {
    
    return(
        <>
            <HeaderComponent/>
            <main className="container-home" >
            <div className="navbar_burger">
                    <div className="burger-bar"></div>
                    <div className="burger-bar"></div>
                    <div className="burger-bar"></div>
                </div>
                <div>
                    <h3 className="title-home">Rémy Hamed</h3>
                </div>
                <div  className="">
                    <div className="ed-div-container">
                        <div>
                            <div className="text-container-education-and-training">
                                <h4>Master Architecture des Logiciels</h4>
                                <div className="progress-bar-container">
                                    <div className="progress-bar"></div>
                                </div>
                                <h5>
                                    De septembre 2022 à septembre 2024
                                </h5>
                                <h5>
                                    Ecole Supérieure de Génie Informatique
                                </h5>
                            </div>
                        </div>
                        <div>
                            <div className="text-container-education-and-training">
                                <h1>Bachelor chef de projet logiciel et réseau</h1>
                                <div className="progress-bar-container">
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
                        <div>
                            <div className="text-container-education-and-training">
                                <h1>Licence histoire</h1>
                                <div className="progress-bar-container">
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
                        <div>
                            <div className="text-container-education-and-training">
                                <h1>Baccalauréat science et technologie de la gestion option communication</h1>
                                <div className="progress-bar-container">
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
                </div>
            </main>
        </>
    );
};