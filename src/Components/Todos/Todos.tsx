import React from "react";
import Todo from "../../Models/Todo";
import TodoItem from "../TodoItem/TodoItem";
import classes from "./Todos.module.css";
import classnames from "classnames";

const Todos: React.FC<{
  items: Todo[];
  onRemoveTodoItem: (todoId: number) => void;
}> = (props) => {
  return (
    <ul className={classnames(classes.todos)}>
      {props.items.map((todoItem) => (
        <TodoItem
          todoItem={todoItem}
          key={todoItem.todoId}
          onRemoveTodo={props.onRemoveTodoItem.bind(null, todoItem.todoId)}
        />
      ))}
    </ul>
  );
};
export default Todos;
