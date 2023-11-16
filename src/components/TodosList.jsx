import Todoitem from "@/components/TodoItem";

import { useContext } from "react";
import { useTodosContext } from "@/context/TodosContext";
const TodosList = () => {
  const { todos } = useTodosContext();

  return (
    <ul>
      {todos.map((todo) => (
        <Todoitem key={todo.id} itemProp={todo} />
      ))}
    </ul>
  );
};

export default TodosList;
