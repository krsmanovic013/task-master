import React from "react";
import "./App.css";
import InputField from "./components/InputField";
import { useState } from "react";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  return (
    <div className="App">
      <span className="heading">Task Master</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleSubmit} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
