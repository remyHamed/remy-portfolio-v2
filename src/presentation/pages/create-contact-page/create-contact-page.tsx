import { FooterComponent } from "../../../presentation/components/footer-component/footer-component";
import { HeaderComponent } from "../../../presentation/components/header-component/header-component";


export const CreateContactPage: React.FC = ():React.ReactNode => {
    return(
        <>
        <HeaderComponent />
            <main>
                <div className="container">
                    <div className="main-div">
                        <div className="cat-div-container">
                            <div className="contact-card">
                                <h2>Contactez-moi</h2>
                                <p>Téléphone : <a href="tel:+33666271179">06 66 27 11 79</a></p>
                                <p>Email : <a href="mailto:hamedremy@hotmail.fr">hamedremy@hotmail.fr</a></p>
                                <p>Compte X : <a href="https://x.com/dev_remy_" target="_blank">@dev_remy_</a></p>
                                <p>LinkedIn : <a href="https://www.linkedin.com/in/rhamed/" target="_blank">linkedin.com/in/rhamed/</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <FooterComponent/>
        </>
    );
};