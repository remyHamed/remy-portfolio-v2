import { FooterComponent } from "../../components/footer-component/footer-component";
import { HeaderComponent } from "../../components/header-component/header-component";
import logo_linkedin  from "/src/assets/socialmedia/linkedin-logo-linkedin-icon-transparent-free-png.webp";
import git_hub_logo from "/src/assets/socialmedia/png-transparent-github-computer-icons-github-logo-monochrome-head-thumbnail.png";
import x_logo from "/src/assets/socialmedia/téléchargement.jpg";
import "./style.scss";

export const CreateHomePage: React.FC = () :React.ReactNode => {
    return(
        <>
            <HeaderComponent />
            <main>
            </main>
            <FooterComponent/>
        </>
    );
}