import React from "react";
import TodoContextObj from "../Models/TodoContextObj";

const todoContextDefaultValue = {
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
};
// @ts-ignore
const TodosContext = React.createContext<TodoContextObj>(
  todoContextDefaultValue
);

export default TodosContext;
