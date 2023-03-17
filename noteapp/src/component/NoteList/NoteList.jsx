import { useState, useEffect } from 'react';
import Note from '../Note/Note.jsx';
import AddNote from '../AddNote/addnote';
import './NoteList.css';
import { v4 as uuidv4 } from 'uuid';

function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = (noteText) => {
    const newNote = {
      id: uuidv4(),
      text: noteText,
      date: new Date().toLocaleDateString(),
    };
    setNotes([newNote, ...notes]);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <>
    <div className="notes-list">
      <AddNote handleAddNote={handleAddNote} />
      </div>
      <div className ="box1">
        <div className="Note5">
      {notes.map((note) => (
        <Note key={note.id} id={note.id} text={note.text} date={note.date} handleDelete={handleDeleteNote} />
      ))}
      </div>
      </div>
    
    </>
  );
}

export default NotesList;