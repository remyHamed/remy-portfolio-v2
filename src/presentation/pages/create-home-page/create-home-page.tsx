import { HeaderComponent } from "@/presentation/components/header-component/header-component";
import "./style.scss";
import { GreetingItemComponent } from "@/presentation/components/greetingItemComponent/greetingItemComponent";
import { ProjectsComponent } from "@/presentation/components/projectsComponent/projectsComponent";
import { ProjectsCardComponent } from "@/presentation/components/projectsCardComponent/projectsCardComponent";
import { AboutMeComponent } from "@/presentation/components/aboutMeComponent/aboutMeComponent";
import { ResumeTitleComponent } from "@/presentation/components/resumeTitleComponent/resumeTitleComponent";
import { DiplomaComponent } from "@/presentation/components/diplomaComponent/diplomaComponent";
import { Item5Component } from "@/presentation/components/item-5-component/item-5-component";
import { ServicesTitleComponent } from "@/presentation/components/servicesTitleComponent/servicesTitleComponent";


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