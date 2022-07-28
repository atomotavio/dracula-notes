import React, { useState, useEffect } from "react";
import View from "./components/View";
import "./style/style.css";

// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('notes');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

function App() {
  const [notes, setNotes]=useState(getDatafromLS());

  const [title, setTitle]=useState('');
  const [content, setContent]=useState('');

  const handleAddNoteSubmit=(e)=>{
    e.preventDefault();

    let note={
      title,
      content
    }
    setNotes([...notes,note]);
    setTitle('');
    setContent('');
  }

  const deleteNote=(title)=>{
    const filteredNotes=notes.filter((element,index)=>{
      return element.title !== title
    })
    setNotes(filteredNotes);
  }

  useEffect(()=>{
    localStorage.setItem('notes',JSON.stringify(notes));
  },[notes])

  return (
    <>
    <nav>
      <h1>Dracula Notes</h1>
    </nav>

    <form onSubmit={handleAddNoteSubmit}>
    <label>
        Title:
        <input type="text" name="title" value={title} onChange={(e)=> setTitle(e.target.value)} required/>
    </label>
    <label>
          Content:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
    </label>
    <button type="submit">Add New Note</button>

    <View notes={notes} deleteNote={deleteNote}></View>
    </form>
    

    <footer>Developed by: Otávio</footer>
    </>
    
  );
}

export default App;
