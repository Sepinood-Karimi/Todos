import React from "react";
import Todo from "../../Models/Todo";
import classes from "./TodoItem.module.css";
import classnames from "classnames";

const TodoItem: React.FC<{ todoItem: Todo; onRemoveTodo: () => void }> = (
  props
) => {
  return (
    <li className={classnames(classes["todo-item"])}>
      {props.todoItem.todoText}
      <div>
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={props.onRemoveTodo}
        ></i>
        <i className="fa fa-pencil" aria-hidden="true"></i>
      </div>
    </li>
  );
};
export default TodoItem;
