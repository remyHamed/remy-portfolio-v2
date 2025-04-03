import React from "react";
import "./style.scss";

export const  GreetingItemComponent: React.FC = () => {

    return (

        <div className="item-1-greating">
            <div className="text-greeting-container">
                <span className="greeting">BONJOUR !</span>
                <div className="white-text">
                    Je suis 
                    <span className="yellow-text"> Remy Hamed</span>
                    , développeur full-stack.
                </div>
            </div>
            <div className="illustration_coding">
            </div>
        </div>
        
    );
};