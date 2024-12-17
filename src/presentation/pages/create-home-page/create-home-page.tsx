import { useState } from "react";
import { FooterComponent } from "../../components/footer-component/footer-component";
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
                    <h3>Rémy Hamed</h3>
                </div>
            </main>
            <FooterComponent/>
        </>
    );
}