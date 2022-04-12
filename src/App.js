import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

export default function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("react-notes-app-data")) || [
      {
        key: nanoid(),
        id: nanoid(),
        text: "This is sample note.",
        date: "15/04/2021",
      },
    ]
  );

  const [seachText, setSeachText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  function addNote(text) {
    const date = new Date();
    const newNote = {
      key: nanoid(),
      text: text,
      id: nanoid(),
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  function deleteNote(id) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSeachText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(seachText)
          )}
          handleAddNote={addNote}
          deleteNote={deleteNote}
        />
      </div>
    </div>
  );
}
