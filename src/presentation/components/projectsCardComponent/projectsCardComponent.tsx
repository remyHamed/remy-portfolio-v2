import gpc from "/src/assets/gpc_logo.png";
import logo from "/src/assets/logo_jeux.png";
import ship from "/src/assets/ship.png";
import gerkin_logo from "/src/assets/slice-cucumber-icon-fresh-seeds-600nw-2162065399.webp";
import php_logo from "/src/assets/stack_logo/php_PNG43.png";
import type_script_logo from "/src/assets/stack_logo/typescript.svg";
import python_logo from "/src/assets/stack_logo/python.png";
import spring_boot from "/src/assets/stack_logo/spring-boot-logo-1.webp";
import java_logo_2 from "/src/assets/stack_logo/731_java.jpg";
import symfony_logo from "/src/assets/stack_logo/symfony.png";
import api_platform_logo from "/src/assets/stack_logo/Logo_Circle webby text blue.png";
import flutter_logo_icon  from "/src/assets/stack_logo/flutter.svg";
import React from "react";
import "./style.scss";

export const  ProjectsCardComponent: React.FC = () => {

    return (
        <div className="item-7">
            <div className="row-item-7">
                <div className="item-7-square">
                    <img 
                        src={gpc} 
                    />
                    <h1 className="service-title">
                        Gestion et Coordination de Coursiers front end
                    </h1>
                    <button
                        onClick={
                            ()=> {
                                window.open(
                                    "https://github.com/Grand-Paris-Courses/grandparis-coursier",
                                    "_blank"
                                )
                            }
                        }
                        className="repo_button"
                    >
                        repository
                    </button>
                    <div className="stack_div">
                        <div>
                            <img src={flutter_logo_icon}/>
                        </div>
                        <div>
                            <p>#FLUTTER</p>
                        </div>
                    </div>
                </div>
                <div className="item-7-square">
                    <img src={gpc} />
                    <h1 className="service-title">
                        Gestion et Coordination de Coursiers back end
                    </h1>
                    <button
                        onClick={
                            ()=> {
                                window.open(
                                    "https://github.com/Grand-Paris-Courses/grandparis-back",
                                    "_blank"
                                )
                            }
                        }
                        className="repo_button"
                    >
                        repository
                    </button>
                    <div className="stack_div">
                        <div>
                            <img src={java_logo_2}/>
                            <img src={spring_boot}/>
                        </div>
                        <div>
                            <p>#JAVA</p>
                            <p>#SPRING BOOT</p>
                        </div>
                    </div>
                </div>
                <div className="item-7-square">
                    <img src={logo} />
                    <h1 className="service-title">
                        Plateforme de jeux front end
                    </h1>
                    <button
                        onClick={
                            ()=> {
                                window.open(
                                    "https://github.com/Game7-ESGI-2023-PA/game7-app",
                                    "_blank"
                                )
                            }
                        }
                        className="repo_button"
                    >
                        repository
                    </button>
                    <div className="stack_div">
                        <div>
                            <img src={type_script_logo}/>
                        </div>
                        <div>
                            <p>#TYPE SCRIPT</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row-item-7">
                <div className="item-7-square">
                    <img src={logo} />
                    <h1 className="service-title">
                        Plateforme de jeux back end
                    </h1>
                    <button
                        onClick={
                            ()=> {
                                window.open(
                                    "https://github.com/Game7-ESGI-2023-PA/game7-api",
                                    "_blank"
                                )
                            }
                        }
                        className="repo_button"
                    >
                        repository
                    </button>
                    <div className="stack_div">
                        <div>
                            <img src={php_logo}/>
                            <img src={symfony_logo}/>
                            <img src={api_platform_logo}/>  
                        </div>
                    <div>
                            <p>#PHP</p>
                            <p>#SYMPHONY</p>
                            <p>#API_PLATFORM</p>
                    </div>
                    </div>
                </div>
                <div className="item-7-square">
                    <img src={ship} />
                    <h1 className="service-title">
                        Apprentissage par Renforcement
                    </h1>
                    <button
                        onClick={
                            ()=> {
                                window.open(
                                    "https://github.com/remyHamed/shoothemUp",
                                    "_blank"
                                )
                            }
                        }
                        className="repo_button"
                    >
                        repository
                    </button>
                    <div className="stack_div">
                        <div>
                            <img src={python_logo}/>
                        </div>
                        <div>
                            <p>#PYTHON</p>
                        </div>
                        
                    </div>
                </div>
                <div className="item-7-square">
                    <img src={gerkin_logo} />
                    <h1 className="service-title">
                        Projet Gherkin
                    </h1>
                    <button
                        onClick={
                            ()=> {
                                window.open(
                                    "https://github.com/ShanAZIZ/EsgiBddGameOfLife",
                                    "_blank"
                                )
                            }
                        }
                        className="repo_button"
                    >
                        repository
                    </button>
                    <div className="stack_div">
                        <div>
                            <img src={gerkin_logo}/>
                            <img src={java_logo_2}/>
                            <img src={spring_boot}/>
                        </div>
                        <div>
                            <p>#GHERKIN</p>
                            <p>#JAVA</p>
                            <p>#SPRING BOOT</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};