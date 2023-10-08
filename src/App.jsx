
import './App.css';

import HeaderNote from './components/HeaderNote';
import AddNote from './components/AddNote';
import Notes from './components/Notes';

import { useReducer, useState } from 'react';
function reducer(notes,{type,paylode}){
switch(type){
  case "addNote" :{
 return [...notes,paylode];
  }
  case "deleteNote" : {
    
    return notes.filter((note)=>note.id !== parseInt(paylode))
  }
  case "checkNote":{
    
  return notes.map((n)=>n.id === paylode ? {...n,complated:!n.complated} : n);
  }
  default:{
    return notes;
  }
}

}
function App() {
  // const [notes,setNotes] = useState([]);
  const [notes,disPatch ] = useReducer(reducer,[])
  const [sortBy,setSortBy] = useState("latest");
  const handelNote = (newNote)=>{
    // setNotes((prevNote)=>[...prevNote,newNote]);
    disPatch({type:"addNote",paylode:newNote})
  };
  const handelDeleteNote = (id)=>{
//  const filteredNotes = notes.filter((note)=>note.id !== parseInt(id));
//  setNotes(filteredNotes);
disPatch({type:"deleteNote",paylode:id})
  };
  const handelCheckNote = (e)=>{
    // const findNote = notes.find((note)=>note.id === parseInt(id));
    // findNote.classList.toggle("note-checked");
   const noteId = Number(e.target.value);
   disPatch({type:"checkNote",paylode:noteId})
  //  const newNotes = notes.map((n)=>n.id === noteId ? {...n,complated:!n.complated} : n);
  //  setNotes(newNotes);
  }
  
 return (
  <div className='note-app'>
    <HeaderNote notes={notes} sortBy={sortBy} onSort={e => setSortBy(e.target.value)}/>
    <main className='note-app__main'>
      <AddNote onAddNote={handelNote}/>
      <Notes notes={notes} sortBy={sortBy} onDeleteNote={handelDeleteNote} onCheckNote={handelCheckNote}/>
    </main>
  </div>
 );

}

export default App
