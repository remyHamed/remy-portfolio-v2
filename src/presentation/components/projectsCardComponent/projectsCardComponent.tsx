import React from "react";
import projects from "../../../file/projects.json";
import "./style.scss";
import { CardComponent } from "../../../presentation/components/cardComponent/cardComponent";


export const ProjectsCardComponent: React.FC = () => {
  return (
    <div className="projects-container">
        {
            projects.map((project, index) => (
                <CardComponent
                key={index}
                image={project.image}
                title={project.title}
                repoUrl={project.repoUrl}
                stack={project.stack}
                />
            ))
        }
    </div>
  );
};