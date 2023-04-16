import React, { useContext } from "react";
import TodoItem from "../TodoItem/TodoItem";
import classes from "../Todos/Todos.module.css";
import classnames from "classnames";
import todosContext from "../../Store/Todos-Context";

const TodosCtx: React.FC = () => {
  const todosCtx = useContext(todosContext);
  return (
    <ul className={classnames(classes.todos)}>
      {todosCtx.items.map((todoItem) => (
        <TodoItem
          todoItem={todoItem}
          key={todoItem.todoId}
          onRemoveTodo={todosCtx.removeTodo.bind(null, todoItem.todoId)}
        />
      ))}
    </ul>
  );
};
export default TodosCtx;
