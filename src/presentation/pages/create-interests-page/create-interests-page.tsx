import { HeaderComponent } from "../../../presentation/components/header-component/header-component";

export const CreateInterestsPage: React.FC = ():React.ReactNode => {
    return(
        <>
        <HeaderComponent />
            <main>
            <div className="container">
                <div className="div-1">
                    <div className="text-container">
                        <h1>Mon immersion dans la culture japonaise</h1>
                        <div >
                            <p>                        
                                Ma passion pour le Japon a commencé par le manga, qui m’a offert une première fenêtre sur cette culture fascinante. À travers les histoires et l’art de ce média, j’ai découvert des aspects du Japon qui m’ont donné envie d’explorer plus en profondeur ce pays et ses traditions.
                            </p>
                            <p>
                                Cette envie s’est concrétisée lors d'un premier séjour de deux semaines à Tokyo. Ce voyage m’a permis de découvrir la vie japonaise de près, en allant au-delà des livres et des écrans. Ce séjour m’a également donné l’occasion de créer des amitiés avec des habitants, qui m’ont fait découvrir Tokyo sous un angle authentique et personnel.
                            </p>
                            <p>
                                Par la suite, j’ai eu l’opportunité de vivre au Japon pendant un an, une expérience marquante qui m’a profondément enrichi. Pendant ce séjour, j’ai travaillé dans un restaurant gastronomique à Tokyo en tant que plongeur. Ce travail m’a permis non seulement d’améliorer ma connaissance de la langue, mais aussi de m’immerger dans le quotidien japonais, en observant de près les valeurs de rigueur et de précision chères à cette culture. En dehors de Tokyo, j’ai eu l'occasion de découvrir Kyoto, Osaka, et même l'île de Shikoku, avec des étapes à Takamatsu et Kochi, ce qui m'a permis d'apprécier les multiples facettes de ce pays.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </main>
        </>
    );
};