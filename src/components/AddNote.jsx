import { useState } from "react";


export default function AddNote({onAddNote}) {
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
const handelSubmit = (e)=>{
e.preventDefault();
if(!title || !description) return;
const newNote = {
  id:new Date().getTime(),
  title,
  description,
  complated:false,
  createdAt:new Date().toISOString(),
};
onAddNote(newNote);
setTitle("");
setDescription("");
};
 
  return (
    <div className='add-note-app'>
       <h2>Add New Note</h2>
      <form className='add-note-app__form' onSubmit={handelSubmit}>
      <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='note title...'></input>
       <input type='text' value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='note description...'></input>
       <button type="submit">Add New Note</button>
      </form>
      </div>
  )
}
