class Todo {
  todoText: string;
  todoId: number;

  constructor(text: string, id?: number) {
    this.todoText = text;
    this.todoId = id || Math.floor(Math.random() * 10);
  }
}
export default Todo;
