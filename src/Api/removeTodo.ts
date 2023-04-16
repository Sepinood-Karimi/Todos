import supabaseApiService from "./service";

const removeTodo = async (id: number) => {
  await supabaseApiService.from("todos").delete().eq("id", id);
};
export default removeTodo;
