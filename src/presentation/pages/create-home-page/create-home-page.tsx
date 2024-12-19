import { useState } from "react";
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
            </main>
        </>
    );
}