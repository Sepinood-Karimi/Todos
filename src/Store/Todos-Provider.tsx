import TodosContext from "./Todos-Context";
import React, { ReactNode, useEffect, useState } from "react";
import Todo from "../Models/Todo";
import TodoContextObj from "../Models/TodoContextObj";
import insertTodo from "../Api/insertTodo";
import getTodos from "../Api/getTodos";
import removeTodo from "../Api/removeTodo";
import updateTodo from "../Api/updateTodo";

const TodosProvider: React.FC<{ children?: ReactNode }> = (props) => {
  const [todoItems, setTodoItems] = useState<Todo[]>([]);

  const addTodoItemsHandler = (newTodoText: string) => {
    const newTodoItem = new Todo(newTodoText);
    insertTodo(newTodoItem);
    setTodoItems((prevTodoItems) => {
      return prevTodoItems.concat(newTodoItem);
    });
  };
  const removeTodoItemHandler = (todoId: number) => {
    removeTodo(todoId);
    setTodoItems((prevTodoItems) => {
      return prevTodoItems.filter((item) => item.todoId !== todoId);
    });
  };

  const editTodoHandler = (todoId: number, newText: string) => {
    updateTodo(todoId, newText);
    setTodoItems((prevTodoItems) =>
      prevTodoItems.map((item) => {
        if (item.todoId === todoId) {
          item.todoText = newText;
        }
        return item;
      })
    );
  };

  const todosContextValue: TodoContextObj = {
    items: todoItems,
    addTodo: addTodoItemsHandler,
    removeTodo: removeTodoItemHandler,
    editTodo: editTodoHandler,
  };

  useEffect(() => {
    getTodos().then((todos) => setTodoItems(todos));
  }, []);

  return (
    <TodosContext.Provider value={todosContextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
