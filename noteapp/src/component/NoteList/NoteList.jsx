import { useState, useEffect } from 'react';
import Note from '../Note/Note.jsx';
import AddNote from '../AddNote/addnote';
import './NoteList.css';
import { v4 as uuidv4 } from 'uuid';
import Search from '../Search/search.jsx';

function NotesList() {
  const [notes, setNotes] = useState([]);

  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
      setNotes(storedNotes);
      setFilteredNotes(storedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
    setFilteredNotes(notes);
  }, [notes]);

  const handleAddNote = (noteText) => {
    const newNote = {
      id: uuidv4(),
      text: noteText,
      date: new Date().toLocaleDateString(),
    };
    setNotes([newNote, ...notes]);
    setFilteredNotes([newNote, ...notes]);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    setFilteredNotes(notes.filter((note) => note.id !== id));
  };

  const handleSearch = (searchText) => {
    const filteredNotes = notes.filter((note) =>
      note.text.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredNotes(filteredNotes);
  };

  return (
    <>
      <div className="notes-list">
        <AddNote handleAddNote={handleAddNote} />
      </div>
      <div className="box2">
        <Search handleSearch={handleSearch} />
      </div>
      <div className ="box1">
        <div className="Note5">
          {filteredNotes.map((note) => (
            <Note key={note.id} id={note.id} text={note.text} date={note.date} handleDelete={handleDeleteNote} />
          ))}
        </div>
      </div>
    </>
  );
}

export default NotesList;
