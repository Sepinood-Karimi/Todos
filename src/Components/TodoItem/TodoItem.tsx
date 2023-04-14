import React from "react";
import Todo from "../Models/Todo";

const TodoItem:React.FC<{todoItem:Todo}> = (props) => {
  return(
      <li>
          {props.todoItem.todoText}
          <i className="fa fa-times" aria-hidden="true"></i>
      </li>
  )
}
export default TodoItem;