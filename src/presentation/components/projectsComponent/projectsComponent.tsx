import React from "react";
import "./style.scss";

export const  ProjectsComponent: React.FC = () => {
    return (
        <div className="item-6-projects">
            <h1 className="item-6-back">Mes Projets</h1>
            <div className="item-6-front">
                <h1 className="item-6-title">Mes Projets</h1>
                <p  className="item-6-front-paragraphe">
                    Découvrez ici une sélection de mes projets, illustrant mes compétences et mon savoir-faire dans le développement front-end et back-end.
                </p>
            </div>
        </div>
    );
};