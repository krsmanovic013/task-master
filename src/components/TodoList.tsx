import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Todos {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Todos) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};
export default TodoList;
