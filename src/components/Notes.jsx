import Message from "./Message";

export default function Notes({notes,onDeleteNote,onCheckNote,sortBy}) {
  let sortedNotes = notes;
  if(sortBy === "earlest")
   sortedNotes = [...notes].sort((a,b)=>new Date(a.createdAt) - new Date(b.createdAt));
   if(sortBy === "latest")
   sortedNotes = [...notes].sort((a,b)=>new Date(b.createdAt) - new Date(a.createdAt));
   if(sortBy === "complated")
   sortedNotes = [...notes].sort((a,b)=> Number(a.complated) - Number(b.complated));
  return (
    <div className='notes'>
        <NotesHeader notes={notes}/>
        {
            sortedNotes.map((note)=>{
               return <NotesMain key={note.id} note={note} onDeleteNote={onDeleteNote} onCheckNote={onCheckNote}/>
            })
        } 
      </div>
  )
}

function NotesHeader({notes}){
  const allNotes = notes.length;
  const complatedNotes = notes.filter((note)=>note.complated).length;
  const unComping = allNotes - complatedNotes;
  if(!allNotes) return <Message  text="No Notes has already beeen added!"/>
    return(

        <div className='notes-header'>
          <div>
          <p>All</p>
          <span className='count'>{allNotes}</span>
          </div>
          <div>
          <p>Complated</p>
          <span className='count'>{complatedNotes}</span>
          </div>
          <div>
          <p>Open</p>
          <span className='count'>{unComping}</span>
          </div>
        </div>
        
   
    )
}
function NotesMain({note,onDeleteNote,onCheckNote}){
    return (
        <div className="notes-main">
          <div className='note'>
            <div className='note-main'>
            <div className={`note-detail ${note.complated ? "note-checked" : ""}`}>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            </div>
            <div className="note-icons">
            <img src="../src/assets/trash-alt (5).svg" onClick={()=>onDeleteNote(note.id)}></img>
              <input type="checkbox" onChange={onCheckNote} checked={note.complated} value={note.id}></input>
            </div>
            </div>
            <p>{new Date().toLocaleDateString("en-US",{
                year:"numeric",
                month:"short",
                day:"numeric"
            })}</p>
          </div>
        </div>
    )
}