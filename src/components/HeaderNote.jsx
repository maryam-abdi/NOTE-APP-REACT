


export default function HeaderNote({notes,sortBy,onSort}) {
  
  return (
    <header className='note-app__header'>
      <h1>My Notes({notes.length})</h1>
      <div>
      <select value={sortBy} onChange={onSort}>
        <option value="latest">Sort based on lasted notes</option>
        <option value="earlest">Sort based on earlest notes</option>
        <option value="complated">Sort based on complated notes</option>
      </select>
      </div>
    </header>
  )
}
