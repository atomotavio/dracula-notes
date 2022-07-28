import React from "react";

function View ({notes, deleteNote}) {
    
    return notes.map(note=>(
        <div key={note.title}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button onClick={() =>deleteNote(note.title)}>Deletar Nota</button>
        </div>
    ))
}

export default View;