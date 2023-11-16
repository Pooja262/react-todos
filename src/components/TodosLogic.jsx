import InputTodo from "@/components/InputTodo";
import TodosList from "@/components/TodosList";
import { TodosProvider } from "@/context/TodosContext";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const TodosLogic = () => {
  return (
    <TodosProvider>
      <InputTodo />
      <TodosList />
    </TodosProvider>
  );
};

export default TodosLogic;
