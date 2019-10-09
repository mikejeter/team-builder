import React, { useState } from "react";

const Form = props => {
  const [team, setTeam] = useState({ name: "" });
  const handleChange = evt => {
    setTeam({ name: evt.target.value });
  };
  const handleEmailChange = evt => {
    setTeam({...team, email: evt.target.value});
  };

  const handleRoleChange = evt => {
    setTeam({...team, role: evt.target.value});
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    props.addTeamFn(team);
    setTeam({name:"", email:"", role:""});
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Teammember Name</label>
      <input id="name" value={team.name} name="name" type="text" onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input id="email" value={team.email} type="text" name="email" onChange={handleEmailChange}/>
      <label htmlFor="role">Role</label>
      <input id="role" value={team.role} type="text" name="role" onChange={handleRoleChange}/>
      <button type="submit">Add Teammember</button>
    </form>
  );
};

export default Form;