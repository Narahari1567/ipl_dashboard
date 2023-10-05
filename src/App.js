import "./App.css";

import TeamCard from "./components/TeamCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetchTeamsData();
  }, []);

  const fetchTeamsData = async () => {
    const response = await fetch("https://apis.ccbp.in/ipl");
    const data = await response.json();
    setTeams(data.teams);
  };

  return (
    <div className="App">
      <div className="img-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          alt="logo"
          className="img"
        />
        <h1>IPL Dashboard New</h1>
      </div>
      <ul className="team-container">
        {teams?.map((team) => (
          <Link className="link" key={team.id} to={`/team-matches/${team.id}`}>
            <TeamCard teams={team} />
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default App;
