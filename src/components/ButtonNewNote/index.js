import React from "react";
import NewNote from "../NewNote";
import "./style.css";

function ButtonNewNote() {
    return (
    <button onClick={function() { NewNote();}}>NOVA NOTA</button>
    )

}
export default ButtonNewNote;