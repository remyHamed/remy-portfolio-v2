import React from "react";
import { CardComponent } from "../../components/cardComponent/cardComponent";
import projects from "/src/file/projects.json";
import "./style.scss";

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