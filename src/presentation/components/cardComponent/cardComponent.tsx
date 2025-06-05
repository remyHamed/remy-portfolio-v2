import React from "react";
import "./style.scss";

interface CardProps {
  image: string;
  title: string;
  repoUrl: string;
  stack: {
    icons: string[];
    labels: string[];
  };
}

export const CardComponent: React.FC<CardProps> = ({ image, title, repoUrl, stack }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h1 className="card-title">{title}</h1>
      <button
        onClick={() => window.open(repoUrl, "_blank")}
        className="repo-button"
      >
        repository
      </button>
      <div className="stack-container">
        <div className="stack-icons">
          {stack.icons.map((icon, index) => (
            <img key={index} src={icon} alt="" className="stack-icon" />
          ))}
        </div>
        <div className="stack-labels">
          {stack.labels.map((label, index) => (
            <p key={index} className="stack-label">
              #{label}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};