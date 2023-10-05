import React from "react";

const TeamCard = ({ teams }) => {
  return (
    <div className="team">
      <img src={teams.team_image_url} alt={teams.name} className="team-img" />
      <div>
        <h3>{teams.name}</h3>
      </div>
    </div>
  );
};

export default TeamCard;
