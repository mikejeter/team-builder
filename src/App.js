import React, { useState } from "react";
import Team from "./components/Team";
import Form from "./components/Form";
import {data} from "./data";
import "./styles.scss";


function App() {
  const [team, setTeam] = useState([
   ...data 
  ]);
  const addTeam = teams => {
    const newTeam = {
      id: Date.now(),
      name: teams.name,
      email: teams.email,
      role: teams.role,
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
