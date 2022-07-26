import React from "react";
import Title from "./components/Title";
import Notes from "./components/Notes";
import ButtonNewNote from "./components/ButtonNewNote";
import "./style/style.css";

function App() {
  return (
    <>
     <Title />
     <ButtonNewNote />
     <div className="notes"> 
     <Notes />
     <Notes />
     <Notes />
     <Notes />
     <Notes />
     <Notes />
     <Notes />
     <Notes />
     <Notes />
     <Notes />
     <Notes />
     <Notes />
     </div>
    </>
    
  );
}

export default App;
