import Todo from "./Todo";

type todoContextObj = {
  items: Todo[];
  addTodo: (todoText: string) => void;
  removeTodo: (todoId: number) => void;
};
export default todoContextObj;
