import classes from "../NewTodo/NewTodoForm.module.css";
import classnames from "classnames";
import React, { FormEvent, useContext, useRef } from "react";
import todosContext from "../../Store/Todos-Context";
const NewTodoCtx: React.FC = () => {
  const inputTodoRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(todosContext);
  const todoFormSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredTodo = inputTodoRef.current!.value;
    if (enteredTodo.trim().length === 0) {
      return;
    }
    todosCtx.addTodo(enteredTodo);
  };
  return (
    <form onSubmit={todoFormSubmitHandler} className={classnames(classes.form)}>
      <label htmlFor="new-todo-ctx">Todo Text Context</label>
      <input id="new-todo-ctx" type="text" ref={inputTodoRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodoCtx;
