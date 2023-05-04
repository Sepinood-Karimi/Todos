import supabaseApiService from "./service";

const updateTodo = async (id: number, newText: string) => {
  await supabaseApiService.from("todos").update({ text: newText }).eq("id", id);
};
export default updateTodo;
