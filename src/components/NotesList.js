import Note from "./Note";
import AddNote from "./AddNote";
import { nanoid } from "nanoid";

export default function NotesList({ notes, handleAddNote, deleteNote }) {
  const notesList = notes.map((note) => (
    <Note
      id={note.id}
      text={note.text}
      date={note.date}
      key={nanoid()}
      handleDeleteNote={deleteNote}
    />
  ));

  return (
    <div className="notes-list">
      {notesList}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}
