import React, { useState } from "react";
import Team from "./components/Team";
import Form from "./components/Form";
import "./styles.scss";


function App() {
  const [team, setTeam] = useState([
    {
      id: 1,
      name: "Michael Jeter",
      email: "mjeter45@yahoo.com",
      role: "Full Stack Web Developer"
    }
  ]);
  const addTeam = team => {
    const newTeam = {
      id: Date.now(),
      name: team.name,
      email: team.email,
      role: team.role,
    }
    setTeam([...team, newTeam])
  }
  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form addTeamFn={addTeam}/>
      <Team teamList={team} />
    </div>
  );
}

export default App;
