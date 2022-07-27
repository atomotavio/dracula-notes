import React from "react";
import "./style/style.css";

function App() {
  return (
    <>
    <nav>
      <h1>Dracula Notes</h1>
    </nav>

    <form>
    <label for="ftitle">Title:</label><br />
    <input type="text" name="ftitle"></input><br />
    <label for="message">Content:</label><br />
    <textarea name="message" rows="10" cols="30" placeholder="What do you want to say?"></textarea> <br />
    <button type="submit">Add New Note</button>
    </form>
    

    <footer>Developed by: Otávio</footer>
    </>
    
  );
}

export default App;
