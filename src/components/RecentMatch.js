import React from "react";

const RecentMatch = ({ match }) => {
  return (
    <div className="result">
      <img
        src={match.competing_team_logo}
        alt={match.competing_team}
        className="image-l"
      />
      <h2 className="team-name">{match.competing_team}</h2>
      <p className="para">{match.result}</p>
      <h4 className={match.match_status === "Won" ? "status" : "lost"}>
        {match.match_status}
      </h4>
    </div>
  );
};

export default RecentMatch;
