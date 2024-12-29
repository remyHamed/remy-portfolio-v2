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
                            <svg baseProfile="tiny" height="200" version="1.2" width="200" xmlns="http://www.w3.org/2000/svg">
                                <defs />
                                <rect fill="none" height="70" rx="10" ry="10" stroke="black" stroke-width="2" width="100" x="10" y="10" />
                                <rect fill="none" height="50" rx="5" ry="5" stroke="black" stroke-width="2" width="70" x="40" y="20" />
                                <rect fill="none" height="30" rx="3" ry="3" stroke="black" stroke-width="2" width="30" x="70" y="30" />
                            </svg>
                            <h1 className="service-title">Responsive Design</h1>
                        </div>
                        <div className="item-5-square">
                                <svg 
                                        baseProfile="tiny" 
                                        width="100.000000pt"
                                        height="100.000000pt"
                                        version="1.2" 
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <defs />
                                    <rect 
                                        fill="none" 
                                        height="100" 
                                        stroke="black" 
                                        stroke-width="2" 
                                        width="140" 
                                        x="30" 
                                        y="30" 
                                    />
                                    <text 
                                        fill="black" 
                                        font-size="12px" 
                                        x="40" 
                                        y="60"
                                    >
                                        $ Code Example
                                    </text>
                                    <text 
                                        fill="black" 
                                        font-size="10px" 
                                        x="40" 
                                        y="80"
                                    >
                                        print('Hello World')
                                    </text>
                                    <circle 
                                        cx="50" 
                                        cy="150" 
                                        fill="none" 
                                        r="10" 
                                        stroke="black" 
                                        stroke-width="2" 
                                    />
                                    <line 
                                        stroke="black" 
                                        stroke-width="2" 
                                        x1="90" 
                                        x2="150" 
                                        y1="150" 
                                        y2="150" 
                                    />
                                </svg>
                                <h1 className="service-title">Technical Tutorials</h1>
                            </div>
                            <div className="item-5-square">
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    width="100.000000pt" height="100.000000pt" viewBox="0 0 512.000000 512.000000"
                                    preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                    fill="#000000" stroke="none">
                                        <path d="M1867 4849 c-419 -44 -772 -353 -889 -777 -18 -65 -22 -105 -22 -257
                                            0 -167 2 -187 27 -270 15 -49 49 -135 76 -190 l50 -100 -21 -22 c-15 -16 -28
                                            -21 -48 -16 -65 12 -96 -10 -334 -246 -125 -124 -234 -240 -242 -258 -19 -45
                                            -17 -97 5 -141 10 -20 73 -89 138 -154 94 -92 128 -119 161 -128 89 -23 95
                                            -19 350 234 129 127 240 243 248 258 8 15 14 47 14 71 0 33 6 49 24 66 23 22
                                            25 22 50 6 l25 -17 3 -1256 c3 -1252 3 -1257 24 -1302 26 -57 100 -125 150
                                            -139 27 -8 416 -11 1235 -11 1321 0 1248 -3 1317 63 70 67 77 88 82 247 l5
                                            145 126 5 c118 5 129 7 175 35 66 41 110 115 119 198 3 34 5 784 3 1667 l-3
                                            1605 -27 50 c-31 59 -57 84 -118 116 l-45 24 -826 5 -826 5 -62 82 c-173 229
                                            -431 371 -731 403 -105 11 -103 11 -213 -1z m310 -174 c336 -78 599 -344 670
                                            -679 22 -106 20 -272 -6 -381 -139 -582 -804 -857 -1318 -545 -106 65 -128 65
                                            -194 3 l-50 -46 -39 38 c-22 22 -40 44 -40 50 0 6 20 31 45 55 59 58 58 79 -5
                                            183 -91 150 -130 290 -130 465 0 161 32 284 106 421 134 245 377 412 655 451
                                            79 11 224 4 306 -15z m2350 -508 l28 -27 3 -1603 c1 -881 0 -1617 -3 -1636 -4
                                            -18 -17 -44 -30 -57 -22 -22 -32 -24 -130 -24 l-105 0 0 1440 c0 1271 -2 1445
                                            -15 1477 -25 59 -59 96 -116 128 l-54 30 -541 3 -541 3 -12 79 c-7 44 -21 106
                                            -31 138 -11 31 -20 63 -20 70 0 10 151 12 770 10 l770 -3 27 -28z m-447 -442
                                            c16 -8 34 -24 40 -34 7 -13 10 -551 10 -1649 l0 -1629 -26 -27 -27 -26 -1184
                                            0 c-829 0 -1190 3 -1205 11 -49 26 -48 -6 -48 1269 0 654 4 1190 8 1190 5 0
                                            44 -9 88 -21 103 -26 284 -36 395 -20 347 51 658 283 800 596 37 83 76 217 85
                                            294 l7 61 514 0 c439 0 518 -2 543 -15z m-3060 -1080 l-205 -205 -105 105
                                            -105 105 205 205 205 205 105 -105 105 -105 -205 -205z" />
                                        <path d="M1850 4495 c-146 -32 -263 -99 -366 -208 -80 -84 -134 -179 -165
                                            -292 -29 -106 -24 -296 10 -395 34 -100 97 -198 176 -275 135 -132 260 -186
                                            450 -193 146 -5 224 11 345 70 68 34 102 59 170 128 94 94 142 173 181 300 30
                                            96 32 261 5 360 -65 241 -255 432 -492 495 -85 23 -235 28 -314 10z m314 -178
                                            c236 -86 383 -327 348 -571 -30 -208 -180 -381 -381 -440 -127 -37 -307 -14
                                            -416 55 -162 101 -255 264 -257 449 -4 371 360 632 706 507z" />
                                        <path d="M3391 3174 c-19 -24 -21 -40 -21 -171 0 -139 1 -145 25 -168 15 -16
                                            36 -25 55 -25 19 0 40 9 55 25 24 23 25 29 25 168 0 131 -2 147 -21 171 -16
                                            20 -29 26 -59 26 -30 0 -43 -6 -59 -26z" />
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