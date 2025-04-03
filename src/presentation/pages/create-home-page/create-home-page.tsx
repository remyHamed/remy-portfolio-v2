import { HeaderComponent } from "../../components/header-component/header-component";
import { Item5Component } from "../../components/item-5-component/item-5-component";
import { GreetingItemComponent } from "../../components/greetingItemComponent/greetingItemComponent";
import { ProjectsComponent } from "../../components/projectsComponent/projectsComponent";
import { ProjectsCardComponent } from "../../components/projectsCardComponent/projectsCardComponent";
import { AboutMeComponent } from "../../components/aboutMeComponent/aboutMeComponent";
import { ResumeTitleComponent } from "../../components/resumeTitleComponent/resumeTitleComponent";
import { ServicesTitleComponent } from "../../components/servicesTitleComponent/servicesTitleComponent";
import { DiplomaComponent } from "../../components/diplomaComponent/diplomaComponent";
import "./style.scss";


export const CreateHomePage: React.FC = () :React.ReactNode => {

    const scrollTpTheTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return(
        <>
            <button
                onClick={scrollTpTheTop}
                id="btn" title="Retour en haut de page"
            >
                revenir en haut
            </button>
            <HeaderComponent />
            <main className="container-home" >
                <GreetingItemComponent/>
                <ProjectsComponent/>
                <ProjectsCardComponent/>
                <AboutMeComponent/>
                <ResumeTitleComponent/>
                <DiplomaComponent/>
                <ServicesTitleComponent/>
                <Item5Component/>
            </main>
        </>
    );
}