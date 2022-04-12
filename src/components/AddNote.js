import { useState } from "react";

export default function ({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");
  const charLimit = 200;

  function handleChange(event) {
    const newVal = event.target.value;
    if (charLimit >= newVal.length) setNoteText(newVal);
  }

  function handleSaveClick(event) {
    if (noteText.trim()) handleAddNote(noteText);
    setNoteText("");
  }

  return (
    <div className="new note">
      <textarea
        placeholder="Type to add a note"
        cols="10"
        rows="8"
        onChange={handleChange}
        value={noteText}
      ></textarea>
      <div className="note-footer">
        <small>{charLimit - noteText.length} remaining...</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}
