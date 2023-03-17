// import AddNote from './component/AddNote/addnote.jsx';
// import Note from './component/Note/Note.jsx'
import NotesList from './component/NoteList/NoteList.jsx';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Notes</h1>
       </header>
      {/* <AddNote/>
      <Note/> */}
      <NotesList/>
      
    </div>
  );
}

export default App;


// // // import logo from './logo.svg';
// import './App.css';
// // import AddNote from './component/AddNote/addnote.jsx';
// import NotesList from './component/NoteList/NoteList.jsx';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//        <h1>Notes</h1>
//       </header>
//       {/* <Note/> */}
   
//       <NotesList
					
// 					handleAddNote={addNote}
// 					handleDeleteNote={deleteNote}
// 				/>
    
     
//     </div>
//   );
// }

// export default App;

