import React, { useState } from "react";

const NoteForm = props => {
  const [note, setNote] = useState({ title: "" });
  const handleChange = evt => {
    setNote({ title: evt.target.value });
  };
  const handleTitleChange = evt => {
    setNote({...note, title: evt.target.value});
  };

  const handleBodyChange = evt => {
    setNote({...note, body: evt.target.value});
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    props.addNoteFn(note);
    setNote({title:"", body:""});
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Note Title</label>
      <input id="title" value={note.title} name="title" type="text" onChange={handleChange} />
      <label htmlFor="note">Note</label>
      <input id="note" value={note.body} type="textarea" name="body" onChange={handleBodyChange}/>
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;