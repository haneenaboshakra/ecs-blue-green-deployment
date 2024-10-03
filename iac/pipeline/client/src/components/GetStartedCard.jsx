import React from "react";
import { Link } from "react-router-dom";
const GetStartedCard = ({ title, description }) => {

  const formatTitleForURL = (title) => {
    return title
      .replace(/ /g, '-')  // Replace spaces with hyphens
      .replace(/&/g, 'and') // Replace & with 'and'
      .replace(/or/g, 'or'); // Optionally replace 'or' if needed
  };

  const formattedTitle = formatTitleForURL(title);

  return (
    <div>
      <Link to={`/questionnaire/${formattedTitle}`}>
    <div className="health-card">
      <h2 className="health-card-title">{title}</h2>
      <div className="health-card-content">
        <p className="health-card-description">{description}</p>
        <div className="health-card-icon">➔</div>
      </div>
    </div>
    </Link></div>
  );
};

export default GetStartedCard;
