import Todo from "./Todo";

type todoContextObj = {
  items: Todo[];
  addTodo: (todoText: string) => void;
  removeTodo: (todoId: number) => void;
  editTodo: (todoId: number, newText: string) => void;
};
export default todoContextObj;
