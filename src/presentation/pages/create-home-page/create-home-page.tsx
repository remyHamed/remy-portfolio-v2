import { useState } from "react";
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
   
            </main>
        </>
    );
}