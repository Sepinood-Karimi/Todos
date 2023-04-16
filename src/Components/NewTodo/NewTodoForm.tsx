import React, { FormEvent, useRef } from "react";
import classes from "./NewTodoForm.module.css";
import classnames from "classnames";

const NewTodoForm: React.FC<{ onAddTodo: (newTodoText: string) => void }> = (
  props
) => {
  const inputTodoRef = useRef<HTMLInputElement>(null);
  const todoFormSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredTodo = inputTodoRef.current!.value;
    if (enteredTodo.trim().length === 0) {
      return;
    }
    props.onAddTodo(enteredTodo);
  };
  return (
    <form onSubmit={todoFormSubmitHandler} className={classnames(classes.form)}>
      <label htmlFor="newTodo"> Todo Text</label>
      <input id="newTodo" type="text" ref={inputTodoRef} />
      <button> Add Todo</button>
    </form>
  );
};
export default NewTodoForm;
