class Todo {
    todoText:string;
    todoId : number;

    constructor(text:string) {
        this.todoText=text;
        this.todoId = Math.random();
    }
}
export default Todo;