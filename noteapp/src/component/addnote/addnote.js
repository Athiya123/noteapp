import React from 'react';
import './addnote.css';
function Note(){
    return(
        <div className="note">
              <div className="">
                <textarea className="note1" placeholder="type to add a note" cols = "10" rows = "5" maxLength="500">
            
                 </textarea>
                </div>
            <div className="saveButton">
                <button type="button" className="saveButton">Save</button>
            </div>
        </div>
    )
}
export default Note;