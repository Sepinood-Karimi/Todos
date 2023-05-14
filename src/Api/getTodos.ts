import supabaseApiService from "./service";
import Todo from "../Models/Todo";

const getTodos = async () => {
  const { data } = await supabaseApiService.from("todos").select("*");
  return (data || []).map(
    (loadedTodo) => new Todo(loadedTodo.text, loadedTodo.id)
  );
};
export default getTodos;
