import React from "react";
import Todo from "../../Models/Todo";
import TodoItem from "../TodoItem/TodoItem";

const Todos: React.FC<{
  items: Todo[];
  onRemoveTodoItem: (todoId: number) => void;
}> = (props) => {
  return (
    <ul>
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
