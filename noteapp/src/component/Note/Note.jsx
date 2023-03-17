import React from 'react';
import {MdDeleteForever} from 'react-icons/md';
import './Note.css';

function Note({id, text, date, handleDelete}) {
    const handleDeleteClick = () => {
        handleDelete(id);
    };

    return (
        <div className="note">

            <div className="back">
                <div className="text1">
                    <p className="note-text">
                        {text}</p>
                </div>
                <div className="text2">
                <p className="note-date">
                    {date}</p></div>

                <MdDeleteForever onClick={handleDeleteClick}
                    className='delete-icon'/>
            </div>
        </div>

    );
}

export default Note;
