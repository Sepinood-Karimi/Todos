import TodosContext from "./Todos-Context";
import React, { ReactNode, useState } from "react";
import Todo from "../Models/Todo";
import TodoContextObj from "../Models/TodoContextObj";

const TodosProvider: React.FC<{ children?: ReactNode }> = (props) => {
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

  const todosContextValue: TodoContextObj = {
    items: todoItems,
    addTodo: addTodoItemsHandler,
    removeTodo: removeTodoItemHandler,
  };

  return (
    <TodosContext.Provider value={todosContextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
