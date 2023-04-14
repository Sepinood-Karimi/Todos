import React from 'react';
import './App.css';
import Todos from "./Components/Todos/Todos";
import Todo from "./Components/Models/Todo";

function App() {
    const items = [new Todo('React'),new Todo('React')]
  return (
    <>
      <Todos items={items}/>
    </>
  );
}

export default App;
