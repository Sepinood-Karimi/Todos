import React, { useState } from "react";
import "./App.css";
import Todos from "./Components/Todos/Todos";
import Todo from "./Models/Todo";
import NewTodoForm from "./Components/NewTodo/NewTodoForm";
import NewTodoCtx from "./Components/NewTodoCtx/NewTodoCtx";
import TodosCtx from "./Components/TodosCtx/TodosCtx";

function App() {
  const [todoItems, setTodoItems] = useState<Todo[]>([]);

  const addTodoItemsHandler = (newTodoText: string) => {
    const newTodoItem = new Todo(newTodoText);
    return setTodoItems((prevTodoItems) => prevTodoItems.concat(newTodoItem));
  };
  const removeTodoItemHandler = (todoId: number) => {
    return setTodoItems((prevTodoItems) =>
      prevTodoItems.filter((item) => item.todoId !== todoId)
    );
  };
  return (
    <>
      <NewTodoForm onAddTodo={addTodoItemsHandler} />
      <Todos items={todoItems} onRemoveTodoItem={removeTodoItemHandler} />
      <NewTodoCtx />
      <TodosCtx />
    </>
  );
}

export default App;
