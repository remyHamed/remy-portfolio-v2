import { HeaderComponent } from "../../components/header-component/header-component";
import "./style.scss";

import img_1 from "/src/assets/icons/svg/domain.svg";

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
                <div className="item-2">
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
                                        <td className="td-left" >téléphone</td>
                                        <td>06 66 27 11 79</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <button className="resume-button">Télécharger mon cv</button>
                        </div>
                    </div>
                </div>
                <div className="item-3">
                    <h1 className="item-3-back">Resume</h1>
                    <div className="item-3-front">
                        <h1 className="item-3-title">Resume</h1>
                        <p  className="item-3-front-paragraphe">
                            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                        </p>
                    </div>
                </div>
                <div className="item-4">
                    <div className="row">
                        <div className="square">
                            <h2 className="year-diploma">
                                2022-2024
                            </h2>
                            <h1 className="title-diploma">
                                Master d'architecture logiciel, Informatique
                            </h1>
                            <h4 className="school">
                                École Supérieure de Génie Informatique
                            </h4>
                            <p className="item-4-pargraphe">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolores quas, tenetur accusantium facilis delectus magni nobis vero. Maiores non expedita magni ab culpa, vero consequatur natus soluta eum ratione.
                            </p>
                        </div>
                        <div className="square">
                            <h2 className="year-diploma">
                                2021-2022
                            </h2>
                            <h1 className="title-diploma">
                                Bachelor chef de projet logiciel et réseau, Informatique
                            </h1>
                            <h4 className="school">
                                École Supérieure de Génie Informatique
                            </h4>
                            <p className="item-4-pargraphe">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolores quas, tenetur accusantium facilis delectus magni nobis vero. Maiores non expedita magni ab culpa, vero consequatur natus soluta eum ratione.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="square">
                            <h2 className="year-diploma">
                                2013-2016
                            </h2>
                            <h1 className="title-diploma">
                                Licence histoire
                            </h1>
                            <h4 className="school">
                                Nanterre Paris Ouest
                            </h4>
                            <p className="item-4-pargraphe">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolores quas, tenetur accusantium facilis delectus magni nobis vero. Maiores non expedita magni ab culpa, vero consequatur natus soluta eum ratione.
                            </p>
                        </div>
                        <div className="square">
                            <h2 className="year-diploma">
                                2010-2011
                            </h2>
                            <h1 className="title-diploma">
                                Baccalauréat science et technologie de la gestion option communication
                            </h1>
                            <h4 className="school">
                                EREA Toulouse Lautrec
                            </h4>
                            <p className="item-4-pargraphe">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolores quas, tenetur accusantium facilis delectus magni nobis vero. Maiores non expedita magni ab culpa, vero consequatur natus soluta eum ratione.
                            </p>    
                        </div>
                    </div>
                    <div>
                        <button className="resume-button-item-4">Télécharger mon cv</button>
                    </div>
                </div>
                <div className="item-3">
                    <h1 className="item-3-back">Services</h1>
                    <div className="item-3-front">
                        <h1 className="item-3-title">Services</h1>
                        <p  className="item-3-front-paragraphe">
                            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                        </p>
                    </div>
                </div>
                <div className="item-5">
                    <div className="row">
                        <div className="item-5-square">
                            <svg className="item-5-img" version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="100.000000pt" height="100.000000pt" viewBox="0 0 512.000000 512.000000"
                                preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                fill="#ffbd39" stroke="none">
                                <path d="M2370 5113 c-379 -36 -661 -116 -980 -278 -378 -193 -716 -495 -965
                                -865 -162 -240 -311 -598 -369 -880 -43 -212 -51 -295 -51 -530 0 -312 34
                                -526 126 -805 53 -159 173 -417 255 -545 147 -231 399 -512 594 -662 314 -242
                                660 -406 1030 -488 182 -40 293 -52 561 -57 316 -7 350 -1 422 72 121 120 96
                                316 -51 402 -45 27 -54 28 -216 33 l-169 5 -55 95 c-70 120 -158 313 -216 472
                                -45 126 -126 407 -126 440 0 17 14 18 233 18 262 0 280 4 349 76 50 53 71 106
                                71 180 -1 73 -36 149 -93 195 -63 52 -107 59 -391 59 l-257 0 -7 55 c-21 175
                                -22 695 0 898 l7 67 488 0 487 0 7 -72 c3 -40 9 -161 12 -268 3 -117 11 -215
                                20 -245 28 -103 127 -177 238 -178 78 -1 138 26 192 85 65 70 68 89 60 353 -3
                                126 -9 251 -12 278 l-7 47 491 0 491 0 11 -37 c18 -64 49 -273 56 -378 3 -57
                                1 -156 -6 -230 -14 -149 -7 -192 41 -262 42 -61 105 -95 188 -101 78 -5 133
                                14 193 66 51 45 74 109 87 236 43 434 -48 910 -255 1325 -124 250 -263 447
                                -458 648 -216 224 -428 378 -711 518 -296 146 -572 225 -900 255 -102 9 -333
                                11 -415 3z m254 -628 c117 -211 229 -493 296 -751 17 -66 34 -127 36 -136 5
                                -17 -19 -18 -396 -18 l-402 0 6 36 c15 79 90 327 138 454 76 204 232 520 256
                                520 4 0 34 -47 66 -105z m767 -55 c337 -147 648 -410 864 -730 l78 -115 -418
                                -3 c-230 -1 -422 1 -425 5 -4 5 -24 80 -45 168 -43 185 -133 462 -200 620 -26
                                61 -49 116 -52 123 -6 14 68 -12 198 -68z m-1474 58 c-118 -272 -215 -575
                                -282 -885 l-5 -23 -421 0 -420 0 12 23 c34 62 140 209 218 300 203 237 523
                                461 808 567 89 33 97 35 90 18z m-360 -1432 c-3 -8 -11 -122 -18 -255 -9 -187
                                -9 -295 0 -482 7 -133 15 -247 18 -255 4 -12 -70 -14 -486 -14 l-490 0 -11 41
                                c-23 85 -40 193 -51 329 -16 191 4 436 51 609 l11 41 490 0 c416 0 490 -2 486
                                -14z m78 -1538 c67 -311 161 -614 255 -823 17 -38 29 -70 27 -72 -8 -8 -156
                                52 -267 107 -316 159 -577 385 -772 670 -36 52 -71 105 -77 118 l-12 22 420 0
                                421 0 5 -22z"/>
                                <path d="M3311 1873 c-51 -26 -76 -66 -74 -116 2 -55 646 -1475 691 -1524 25
                                -28 36 -33 76 -33 88 0 93 6 227 273 67 133 131 253 143 265 11 13 132 80 268
                                148 273 137 278 142 278 230 0 40 -5 51 -32 76 -35 32 -1457 683 -1513 693
                                -19 4 -43 -1 -64 -12z"/>
                                </g>
                            </svg>

                            <h1 className="service-title">Web Development</h1>
                        </div>
                        <div className="item-5-square">
                            <img className="item-5-img" src={img_1} alt="Application Development" />
                            <h1 className="service-title">Application Development</h1>
                        </div>
                        <div className="item-5-square">
                            <img className="item-5-img" src={img_1} alt="Software Architecture" />
                            <h1 className="service-title">Software Architecture</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="item-5-square">
                            <img className="item-5-img" src={img_1} alt="Responsive Design" />
                            <h1 className="service-title">Responsive Design</h1>
                        </div>
                        <div className="item-5-square">
                            <img className="item-5-img" src={img_1} alt="Technical Tutorials" />
                            <h1 className="service-title">Technical Tutorials</h1>
                        </div>
                        <div className="item-5-square">
                            <img className="item-5-img" src={img_1} alt="Phone Application" />
                            <h1 className="service-title">Phone Application</h1>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}