import { useState } from 'react';
import './addnote.css';

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState('');

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleSaveClick = () => {
    handleAddNote(noteText);
    setNoteText('');
  };

  return (
    <div className="add-note">
      <textarea className="note1"placeholder="Enter note text..." value={noteText} onChange={handleChange} />
      <button className="saveButton" onClick={handleSaveClick}>Save</button>
    </div>
  );
}

export default AddNote;