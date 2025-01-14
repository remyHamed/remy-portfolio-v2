import { HeaderComponent } from "../../components/header-component/header-component";
import gpc from "/src/assets/gpc_logo.png";
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
                <div className="item-6">
                    <h1 className="item-6-back">Mes Projets</h1>
                    <div className="item-6-front">
                        <h1 className="item-6-title">Mes Projets</h1>
                        <p  className="item-6-front-paragraphe">
                            A smalllriver named Duden flow by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                        </p>
                    </div>
                </div>
                <div className="item-7">
                    <div className="row-item-7">
                        <div className="item-7-square">
                            <img src={gpc} />
                            <h1 className="service-title">
                                Gestion et Coordination de Coursiers front end
                            </h1>
                            <button className="resume-button">repository</button>
                        </div>
                        <div className="item-7-square">
                            <img src={gpc} />
                            <h1 className="service-title">
                                Gestion et Coordination de Coursiers back end
                            </h1>
                            <button className="resume-button">repository</button>
                        </div>
                        <div className="item-7-square">
                            <img src={gpc} />
                            <h1 className="service-title">
                                Développement d'une plateforme de jeux front end
                            </h1>
                            <button className="resume-button">repository</button>
                        </div>
                    </div>
                    <div className="row-item-7">
                        <div className="item-7-square">
                            <img src={gpc} />
                            <h1 className="service-title">
                                Développement d'une plateforme de jeux back end
                            </h1>
                            <button className="resume-button">repository</button>
                        </div>
                        <div className="item-7-square">
                            <img src={gpc} />
                            <h1 className="service-title">
                                Responsive Design
                            </h1>
                            <button className="resume-button">repository</button>
                        </div>
                        <div className="item-7-square">
                            <img src={gpc} />
                            <h1 className="service-title">
                                Responsive Design
                            </h1>
                            <button className="resume-button">repository</button>
                        </div>
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
                            <svg 
                                className="item-5-img"
                                version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="100.000000pt" height="100.000000pt" viewBox="0 0 512.000000 512.000000"
                                preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" 
                                   fill="#ffbd39" stroke="none">
                                    <path d="M0 3160 l0 -1650 1015 0 1014 0 3 -148 3 -147 75 0 75 0 3 148 3 147
                                    369 0 370 0 0 -375 0 -375 -370 0 -370 0 0 150 0 150 -80 0 -80 0 0 -149 0
                                    -149 -117 -4 c-145 -5 -212 -31 -291 -111 -70 -72 -103 -147 -110 -253 l-5
                                    -84 1053 0 1053 0 -5 84 c-7 106 -40 181 -110 253 -79 80 -146 106 -290 111
                                    l-118 4 0 374 0 374 1015 0 1015 0 0 1650 0 1650 -1955 0 -1955 0 0 -75 0 -75
                                    1880 0 1880 0 0 -75 0 -75 -2410 0 -2410 0 0 75 0 75 455 0 455 0 0 75 0 75
                                    -530 0 -530 0 0 -1650z m4970 75 l0 -1125 -230 0 -230 0 0 -75 0 -75 230 0
                                    230 0 0 -150 0 -150 -2410 0 -2410 0 0 150 0 150 1955 0 1955 0 0 75 0 75
                                    -1955 0 -1955 0 0 1125 0 1125 2410 0 2410 0 0 -1125z m-1666 -2637 c44 -13
                                    136 -96 136 -123 0 -13 -92 -15 -880 -15 -788 0 -880 2 -880 15 0 25 91 109
                                    130 122 52 16 1438 17 1494 1z"/>
                                    <path d="M310 4135 l0 -75 75 0 75 0 0 75 0 75 -75 0 -75 0 0 -75z"/>
                                    <path d="M610 4135 l0 -75 75 0 75 0 0 75 0 75 -75 0 -75 0 0 -75z"/>
                                    <path d="M1355 3480 l-250 -250 252 -252 253 -253 55 55 55 55 -197 197 -198
                                    198 198 198 197 197 -53 53 c-29 28 -55 52 -57 52 -3 0 -118 -113 -255 -250z"/>
                                    <path d="M3452 3678 l-52 -53 197 -197 198 -198 -198 -198 -197 -197 55 -55
                                    55 -55 253 253 252 252 -250 250 c-137 137 -252 250 -255 250 -3 0 -29 -24
                                    -58 -52z"/>
                                    <path d="M3109 3663 c-116 -271 -399 -941 -399 -946 0 -4 35 -7 79 -7 l78 0
                                    209 491 c115 271 211 496 212 500 2 5 -33 9 -78 9 l-81 0 -20 -47z"/>
                                    <path d="M1890 2785 l0 -75 335 0 335 0 0 75 0 75 -335 0 -335 0 0 -75z"/>
                                    <path d="M4210 2035 l0 -75 75 0 75 0 0 75 0 75 -75 0 -75 0 0 -75z"/>
                                    <path d="M2459 1332 c-34 -17 -65 -44 -84 -71 -28 -39 -30 -50 -30 -126 0 -76
                                    2 -87 30 -126 39 -56 120 -99 184 -99 67 0 147 43 186 98 27 40 30 51 30 127
                                    0 76 -3 87 -30 127 -20 28 -49 52 -84 71 -73 36 -131 36 -202 -1z m149 -142
                                    c47 -44 15 -130 -48 -130 -38 0 -70 34 -70 75 0 41 32 75 70 75 14 0 36 -9 48
                                    -20z"/>
                                </g>
                            </svg>
                            <h1 className="service-title">Application Development</h1>
                        </div>
                        <div className="item-5-square">
                            <svg 
                                className="item-5-img"
                                version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="100.000000pt" height="100.000000pt" viewBox="0 0 512.000000 512.000000"
                                preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                fill="#ffbd39" stroke="none">
                                <path d="M2355 5110 c-614 -54 -1165 -311 -1600 -745 -644 -642 -897 -1566
                                -670 -2450 81 -316 235 -635 435 -899 354 -468 856 -800 1421 -940 210 -52
                                319 -66 554 -73 451 -12 830 73 1227 274 690 349 1197 1014 1347 1769 43 217
                                55 356 48 589 -7 226 -22 337 -73 544 -224 904 -939 1626 -1839 1856 -258 66
                                -603 97 -850 75z m1764 -944 c54 -29 65 -59 69 -193 4 -109 2 -127 -17 -167
                                -25 -50 -67 -76 -125 -76 l-36 0 0 -939 0 -938 50 -7 c60 -8 105 -43 121 -95
                                6 -21 9 -86 7 -153 -3 -131 -15 -158 -79 -190 -31 -17 -89 -18 -766 -18 l-733
                                0 0 -57 c0 -56 1 -59 37 -78 99 -54 118 -190 37 -271 -77 -76 -199 -63 -267
                                27 -24 34 -33 106 -18 152 12 34 80 107 101 107 6 0 10 27 10 60 l0 60 -731 0
                                c-809 0 -780 -2 -820 64 -26 43 -28 283 -3 326 22 36 62 59 118 66 l46 7 0
                                938 0 939 -42 0 c-25 0 -57 8 -75 20 -53 32 -63 63 -63 205 0 142 10 173 63
                                205 31 20 62 20 1560 20 1315 0 1532 -2 1556 -14z"/>
                                <path d="M1044 4067 c-2 -7 -3 -62 -2 -123 l3 -109 1510 -3 c1411 -2 1511 -1
                                1523 15 15 21 17 186 2 214 -11 19 -38 19 -1521 19 -1238 0 -1511 -2 -1515
                                -13z"/>
                                <path d="M1220 2790 l0 -940 1345 0 1345 0 0 940 0 940 -1345 0 -1345 0 0
                                -940z m574 853 c6 -11 25 -28 43 -37 67 -32 97 -130 49 -161 -30 -20 -55 -10
                                -72 29 l-13 31 -1 -36 c0 -31 5 -37 35 -52 98 -47 99 -189 2 -242 -18 -9 -38
                                -27 -43 -39 -7 -16 -18 -21 -44 -21 -26 0 -37 5 -44 21 -5 12 -25 30 -43 39
                                -41 22 -73 72 -73 113 0 31 22 62 43 62 22 0 56 -30 60 -53 3 -14 5 -10 6 13
                                1 31 -4 38 -34 54 -20 11 -44 34 -55 51 -41 66 -15 153 55 191 19 10 35 23 35
                                29 0 39 78 46 94 8z m1867 -53 c22 -12 26 -59 7 -78 -17 -17 -899 -17 -916 0
                                -17 17 -15 48 5 70 15 17 42 18 450 18 280 0 441 -4 454 -10z m7 -172 c7 -7
                                12 -24 12 -38 0 -14 -5 -31 -12 -38 -9 -9 -124 -12 -454 -12 -389 0 -444 2
                                -458 16 -19 18 -21 55 -4 72 17 17 899 17 916 0z m-10 -164 c23 -16 28 -48 12
                                -74 -8 -13 -71 -15 -446 -18 -476 -3 -484 -2 -484 53 0 54 7 55 470 55 369 0
                                429 -2 448 -16z m-1287 -164 c22 -13 26 -62 5 -79 -9 -8 -140 -10 -467 -9
                                l-454 3 -9 27 c-8 22 -6 32 9 48 18 20 29 20 457 20 284 0 446 -4 459 -10z
                                m570 -28 c103 -50 179 -153 194 -263 10 -66 -5 -89 -55 -89 -36 0 -40 -3 -58
                                -43 -21 -48 -70 -100 -114 -123 -49 -25 -131 -29 -184 -9 -208 79 -209 367 -1
                                444 22 9 27 17 27 45 0 53 23 69 89 64 31 -2 77 -14 102 -26z m727 -84 c19
                                -19 15 -66 -7 -78 -11 -6 -87 -10 -175 -10 -127 0 -157 3 -170 16 -19 18 -21
                                55 -4 72 17 17 339 17 356 0z m-1290 -50 c19 -19 15 -66 -7 -78 -13 -6 -175
                                -10 -457 -10 -393 0 -439 2 -456 17 -22 20 -23 46 -2 67 14 14 69 16 463 16
                                334 0 450 -3 459 -12z m1283 -108 c22 -12 26 -59 7 -78 -8 -8 -62 -12 -178
                                -12 -175 0 -190 4 -190 46 0 48 20 54 186 54 88 0 164 -4 175 -10z m-1283 -52
                                c17 -17 15 -54 -4 -72 -14 -14 -68 -16 -452 -16 -380 0 -440 2 -460 16 -24 17
                                -28 35 -12 65 10 18 26 19 463 19 339 0 456 -3 465 -12z m1290 -120 c19 -19
                                15 -66 -7 -78 -11 -5 -86 -10 -171 -10 -85 0 -160 5 -171 10 -22 12 -26 59 -7
                                78 17 17 339 17 356 0z m-2020 -10 c9 -9 12 -82 12 -265 l0 -253 315 0 315 0
                                16 -25 c15 -23 15 -27 0 -50 l-16 -25 -315 0 -315 0 0 -50 c0 -38 -4 -52 -19
                                -60 -48 -25 -81 1 -81 66 l0 44 -44 0 c-48 0 -76 19 -76 50 0 31 28 50 76 50
                                l44 0 0 253 c0 270 1 277 50 277 14 0 31 -5 38 -12z m552 -158 c14 -14 20 -33
                                20 -68 0 -66 -31 -101 -71 -81 -12 6 -28 -5 -63 -46 -58 -67 -76 -69 -155 -16
                                l-58 40 -64 -65 c-35 -35 -72 -64 -83 -64 -23 0 -56 28 -56 47 0 18 159 191
                                183 199 12 4 41 -10 83 -37 l65 -42 29 28 c23 22 27 33 23 60 -4 26 -1 36 18
                                49 33 23 104 21 129 -4z m1468 -92 c19 -19 15 -66 -7 -78 -13 -6 -230 -10
                                -635 -10 -545 0 -616 2 -630 16 -19 18 -21 55 -4 72 17 17 1259 17 1276 0z
                                m-7 -158 c22 -12 26 -59 7 -78 -9 -9 -133 -12 -494 -12 -425 0 -484 2 -498 16
                                -20 19 -20 34 0 62 l15 22 475 0 c309 0 482 -4 495 -10z"/>
                                <path d="M1691 3484 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
                                <path d="M1801 3294 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
                                <path d="M2850 2895 l0 -85 90 0 c50 0 90 2 90 5 0 9 -38 78 -52 96 -21 26
                                -89 69 -109 69 -17 0 -19 -9 -19 -85z"/>
                                <path d="M2705 2850 c-38 -39 -46 -120 -17 -166 20 -32 75 -64 110 -64 48 0
                                122 47 122 77 0 10 -19 13 -75 13 -89 0 -95 6 -95 104 0 36 -4 66 -8 66 -5 0
                                -21 -13 -37 -30z"/>
                                <path d="M1047 1733 c-13 -12 -8 -218 5 -231 9 -9 358 -12 1509 -12 1348 0
                                1499 2 1513 16 12 12 16 37 16 109 0 51 -3 100 -6 109 -6 15 -149 16 -1518 16
                                -832 0 -1516 -3 -1519 -7z"/>
                                <path d="M2515 1155 c-46 -45 -19 -118 43 -118 43 0 72 28 72 70 0 67 -68 96
                                -115 48z"/>
                                </g>
                            </svg>
                            <h1 className="service-title">Software Architecture</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="item-5-square">
                            <svg  
                                className="item-5-img"
                                version="1.0" id="Calque_1"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="100.000000pt"
                                height="100.000000pt"
                                viewBox="0 0 512 512"
                                enable-background="new 0 0 512 512">
                                <g id="iphone" fill="#ffbd39">
                                </g>
                                <path  d="M464.068,111.809H52.56v0.001c-6.471,0-11.766,5.294-11.766,11.766v268.849
                                    c0,6.472,5.295,11.767,11.766,11.767h411.508c6.471,0,11.767-5.295,11.767-11.767v-268.85
                                    C475.834,117.104,470.538,111.809,464.068,111.809z M181.256,324.081l65.103,22.27l-72.458,26.371l-52.699-144.802l88.421-32.18
                                    l-37.518,109.679C169.489,313.064,173.606,321.465,181.256,324.081z M221.419,316.619c0.734-2.145,3.074-3.296,5.218-2.562
                                    l14.797,5.062c2.153,0.736,3.297,3.079,2.563,5.224c-0.735,2.149-3.073,3.299-5.227,2.562l-14.797-5.062
                                    C221.829,321.109,220.684,318.769,221.419,316.619z M197.439,288.393l44.187-129.175l82.805,28.325l-44.187,129.175L197.439,288.393
                                    z M343.174,189.792c2.615-7.647-1.503-16.047-9.15-18.664l-29.27-10.012l37.992-13.827l52.7,144.802l-99.675,36.276L343.174,189.792
                                    z M61.288,132.123h264.495l-51.252,18.654l-30.433-10.41c-7.649-2.616-16.049,1.502-18.665,9.149l-7.475,21.851l-102.67,37.368
                                    c-11.562,4.206-17.522,16.987-13.312,28.547l51.174,140.6c0.805,2.215,1.927,4.222,3.292,5.993H61.288V132.123z M455.339,383.876
                                    H201.83l199.508-72.612c11.56-4.211,17.521-16.992,13.312-28.554l-51.177-140.602c-1.494-4.104-4.071-7.497-7.286-9.985h99.152
                                    V383.876z"/>
                            </svg>
                            <h1 className="service-title">
                                Responsive Design
                            </h1>
                        </div>
                        <div className="item-5-square">
                            <svg 
                                className="item-5-img"
                                version="1.0"
                                xmlns="http://www.w3.org/2000/svg"
                                width="100.000000pt"
                                height="100.000000pt"
                                viewBox="0 0 512.000000 512.000000"
                                preserveAspectRatio="xMidYMid meet">
                                <g
                                    transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                    fill="#ffbd39"
                                    stroke="none"
                                >
                                <path d="M1435 4881 c-71 -18 -131 -66 -169 -136 -20 -38 -21 -54 -24 -400 -2
                                -198 0 -375 3 -393 13 -70 89 -96 136 -46 l24 26 5 380 c5 361 6 380 24 394
                                17 12 272 14 1747 14 1685 0 1727 0 1750 -19 l24 -19 3 -1116 2 -1115 -437 -3
                                c-422 -3 -439 -4 -478 -24 -22 -11 -53 -40 -70 -63 l-30 -43 -3 -174 -4 -174
                                -321 0 -322 0 0 107 c0 95 -3 114 -26 163 -29 63 -77 121 -130 159 l-35 26
                                158 495 c87 272 158 501 158 510 0 23 -29 60 -56 70 -28 11 -75 -3 -90 -28 -9
                                -14 -222 -671 -305 -938 l-19 -61 -72 -5 c-135 -9 -155 -23 -486 -343 l-72
                                -70 -788 -5 -787 -5 -70 -24 c-241 -81 -407 -241 -486 -468 -31 -92 -192
                                -1048 -185 -1107 11 -99 90 -185 190 -206 35 -7 299 -10 832 -8 777 3 779 3
                                819 25 52 28 99 78 122 128 16 36 19 84 23 460 l5 420 250 6 c276 6 303 11
                                430 77 74 39 108 69 358 309 l159 153 872 2 872 3 49 26 c57 29 110 92 125
                                149 7 26 9 474 8 1382 l-3 1343 -28 48 c-35 60 -93 102 -158 116 -57 13 -3444
                                14 -3494 2z m1558 -2587 c86 -29 147 -120 147 -219 0 -83 -31 -123 -263 -344
                                -308 -295 -321 -301 -680 -301 -232 0 -264 -5 -315 -53 -58 -53 -57 -46 -60
                                -508 l-3 -426 -25 -24 c-25 -23 -32 -24 -204 -27 l-178 -4 -4 179 c-4 159 -6
                                183 -26 220 -47 89 -92 103 -348 103 -177 0 -204 2 -204 15 0 9 9 68 21 132
                                17 95 18 121 8 145 -21 52 -80 64 -123 26 -24 -21 -30 -49 -91 -411 -35 -214
                                -67 -392 -70 -398 -10 -16 -320 -11 -360 5 -64 27 -64 16 25 541 44 264 88
                                505 96 535 25 86 74 169 139 236 67 67 125 105 224 143 l66 26 796 5 796 5 46
                                30 c25 17 124 104 219 195 115 110 185 170 208 177 51 16 110 15 163 -3z
                                m1967 -138 c0 -118 -1 -127 -24 -153 l-24 -28 -404 0 -403 0 -3 140 c-1 76 0
                                145 2 152 4 10 91 13 431 13 l425 0 0 -124z m-3736 -1432 c14 -5 16 -30 16
                                -170 l0 -164 -243 0 c-134 0 -246 2 -249 5 -4 4 32 247 47 313 5 22 6 22 209
                                22 113 0 211 -3 220 -6z"/>
                                <path d="M1836 4319 c-35 -28 -36 -80 -1 -114 l24 -25 584 0 c576 0 585 0 611
                                21 20 16 26 29 26 59 0 30 -6 43 -26 59 -26 21 -35 21 -609 21 -574 0 -583 0
                                -609 -21z"/>
                                <path d="M1832 3897 c-27 -29 -28 -77 -3 -108 l19 -24 1377 0 1377 0 19 24
                                c26 32 25 82 -4 109 l-23 22 -1370 0 -1371 0 -21 -23z"/>
                                <path d="M1103 3760 c-205 -54 -373 -189 -473 -381 -57 -109 -80 -208 -80
                                -337 0 -130 18 -209 75 -327 91 -188 248 -321 455 -387 64 -20 95 -23 215 -22
                                123 0 150 3 217 26 125 42 203 91 303 192 104 104 161 205 195 340 25 97 26
                                239 4 339 -21 94 -90 236 -153 313 -92 114 -241 207 -389 245 -101 25 -269 25
                                -369 -1z m326 -155 c192 -46 350 -195 417 -395 28 -82 26 -252 -3 -345 -54
                                -173 -205 -324 -378 -378 -98 -31 -252 -31 -350 0 -169 53 -316 197 -375 366
                                -30 86 -37 230 -16 321 48 204 222 382 422 430 78 19 204 19 283 1z"/>
                                <path d="M2344 3496 c-33 -15 -44 -33 -44 -72 0 -77 28 -84 340 -84 313 0 340
                                7 340 85 0 39 -16 62 -51 74 -49 17 -545 14 -585 -3z"/>
                                <path d="M3844 3500 c-28 -11 -54 -48 -54 -77 0 -12 11 -35 24 -50 l24 -28
                                372 0 372 0 24 28 c30 36 30 68 0 104 l-24 28 -359 2 c-197 1 -368 -2 -379 -7z"/>
                                <path d="M3653 2933 c-29 -6 -63 -49 -63 -79 0 -12 11 -36 24 -51 l24 -28 451
                                0 450 0 23 22 c30 30 30 86 0 116 l-23 22 -432 1 c-237 1 -442 0 -454 -3z"/>
                                <path d="M3177 1528 c-35 -27 -37 -62 -37 -646 0 -622 0 -615 53 -640 39 -19
                                78 -4 99 39 17 31 18 81 18 605 0 589 -2 624 -40 644 -26 14 -73 12 -93 -2z"/>
                                </g>
                            </svg>
                            <h1 className="service-title">
                                Technical Tutorials
                            </h1>
                        </div>
                        <div className="item-5-square">
                            <svg 
                                className="item-5-img"
                                version="1.0"
                                xmlns="http://www.w3.org/2000/svg"
                                width="100.000000pt"
                                height="100.000000pt"
                                viewBox="0 0 360.000000 360.000000"
                                preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,360.000000) scale(0.100000,-0.100000)"
                                    fill="#ffbd39" stroke="none">
                                    <path d="M1255 3231 c-72 -18 -123 -60 -150 -123 -13 -33 -15 -184 -15 -1308
                                    0 -1124 2 -1275 15 -1308 20 -47 50 -78 100 -105 40 -22 46 -22 595 -22 549 0
                                    555 0 595 22 50 27 80 58 100 105 13 33 15 184 15 1308 0 1124 -2 1275 -15
                                    1308 -20 47 -50 78 -100 105 -39 22 -48 22 -575 24 -294 1 -548 -2 -565 -6z
                                    m257 -93 l3 -33 285 0 285 0 3 33 3 32 128 0 c116 0 131 -2 161 -23 19 -12 43
                                    -38 54 -57 21 -35 21 -45 24 -1263 1 -811 -1 -1242 -8 -1267 -14 -51 -46 -89
                                    -94 -111 -38 -17 -76 -19 -556 -19 -480 0 -518 2 -556 19 -48 22 -80 60 -94
                                    111 -7 25 -9 456 -8 1267 3 1218 3 1228 24 1263 11 19 35 45 54 57 30 21 45
                                    23 161 23 l128 0 3 -32z"/>
                                </g>
                            </svg>
                            <h1 className="service-title">Phone Application</h1>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}