import React from "react";

const Team = props => {
  console.log(props);
  return (
    <div className="team-list">
      {props.teamList.map(team => {
          return (
          <div className="team" key={team.id}>
              <h2>{team.name}</h2>
              <h2>{team.email}</h2>
              <h2>{team.role}</h2>
          </div>
          );
      })}
    </div>
  );
};
export default Team;