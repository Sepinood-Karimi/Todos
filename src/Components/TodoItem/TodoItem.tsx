import React, { FormEvent, useContext, useRef, useState } from "react";
import Todo from "../../Models/Todo";
import classes from "./TodoItem.module.css";
import classnames from "classnames";
import todosContext from "../../Store/Todos-Context";

const TodoItem: React.FC<{ todoItem: Todo; onRemoveTodo: () => void }> = (
  props
) => {
  const [showEdit, setShowEdit] = useState<boolean>(false);

  const editedTextRef = useRef<HTMLInputElement>(null);

  const todosCtx = useContext(todosContext);

  const showEditHandler = () => {
    setShowEdit(true);
  };

  const editHandler = (event: FormEvent) => {
    event.preventDefault();
    const newText = editedTextRef.current!.value;
    todosCtx.editTodo(props.todoItem.todoId, newText);
    setShowEdit(false);
  };
  return (
    <li className={classnames(classes["todo-item"])}>
      {props.todoItem.todoText}
      {!showEdit && (
        <div>
          <i
            className="fa fa-times"
            aria-hidden="true"
            onClick={props.onRemoveTodo}
          ></i>
          <i
            className={classnames("fa fa-pencil")}
            aria-hidden="true"
            onClick={showEditHandler}
          ></i>
        </div>
      )}
      {showEdit && (
        <div>
          <form
            className={classnames(classes["edit-form"])}
            onSubmit={editHandler}
          >
            <input ref={editedTextRef} />
            <button>
              <i className="fa fa-check-square-o" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      )}
    </li>
  );
};
export default TodoItem;
