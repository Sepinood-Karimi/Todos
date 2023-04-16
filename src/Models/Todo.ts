class Todo {
  todoText: string;
  todoId: number;

  constructor(text: string) {
    this.todoText = text;
    this.todoId = Math.floor(Math.random() * 10);
  }
}
export default Todo;
