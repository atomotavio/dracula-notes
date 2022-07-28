import React from "react";

function View ({notes}) {
    
    return notes.map(note=>(
        <div key={note.title}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
        </div>
    ))
}

export default View;