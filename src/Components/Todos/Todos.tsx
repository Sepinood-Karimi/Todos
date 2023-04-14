import React from "react";
import Todo from "../Models/Todo";
import todo from "../Models/Todo";
import TodoItem from "../TodoItem/TodoItem";

const Todos:React.FC<{items:Todo[]}> = (props) => {
  return(
      <ul>
          {props.items.map(todoItem=><TodoItem todoItem={todoItem} key={todoItem.todoId}/>)}
      </ul>
  )
}
export default Todos;