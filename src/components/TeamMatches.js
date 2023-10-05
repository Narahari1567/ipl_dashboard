import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RecentMatch from "./RecentMatch";

const TeamMatches = () => {
  const [matches, setMatches] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    fetchMatchDetails();
  }, []);

  const fetchMatchDetails = async () => {
    const res = await fetch(`https://apis.ccbp.in/ipl/${id}`);
    const data = await res.json();

    setMatches(data);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div>
        <img src={matches.team_banner_url} alt="kkr" className="team-logo" />
      </div>
      <h3 className="latest">Latest Matches</h3>

      <div className="latest-match">
        <div className="div">
          <div>
            <h2 className="heading">
              {matches?.latest_match_details?.competing_team}
            </h2>
            <h3 className="date">{matches?.latest_match_details?.date}</h3>
            <p>{matches?.latest_match_details?.venue}</p>
            <p>{matches?.latest_match_details?.result}</p>
          </div>
          <img
            src={matches?.latest_match_details?.competing_team_logo}
            alt="srh"
            className="srh"
          />
        </div>
        <hr className="line" />
        <div>
          <h3 className="sub-heading">First Innings</h3>
          <h3 className="sub-heading">
            {matches?.latest_match_details?.first_innings}
          </h3>
          <h3 className="sub-heading">Second Innings</h3>
          <h3 className="sub-heading">
            {matches?.latest_match_details?.second_innings}
          </h3>
          <h3 className="sub-heading">Man of the match</h3>
          <h3 className="sub-heading">
            {matches?.latest_match_details?.man_of_the_match}
          </h3>
          <h3>Umpires</h3>
          <h3>{matches?.latest_match_details?.umpires}</h3>
        </div>
      </div>

      <ul className="result-container">
        {matches.recent_matches.map((match) => (
          <RecentMatch key={match.id} match={match} />
        ))}
      </ul>
      <div className="btn-container">
        <Link className="link" to="/">
          <button className="btn">Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default TeamMatches;
