import Todo from "../Models/Todo";
import supabaseApiService from "./service";

const insertTodo = async (todo: Todo) => {
  await supabaseApiService
    .from("todos")
    .insert({ id: todo.todoId, text: todo.todoText });
};
export default insertTodo;
