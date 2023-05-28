import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { useState, useRef, useEffect } from "react";

interface Todos {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todo: Todo;
}

const SingleTodo = ({ todo, todos, setTodos }: Todos) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(todo.todo);
  const inputFocus = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputFocus.current?.focus();
  }, [edit]);

  //Done
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  //Delete
  const handleDelete = (id: number) => {
    setTodos(todos.filter((a) => a.id !== id));
  };

  //Edit
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editText } : todo))
    );
    setEdit(false);
  };

  return (
    <form
      className="todos-single"
      onSubmit={(e) => {
        handleEdit(e, todo.id);
      }}
    >
      {edit ? (
        <input
          ref={inputFocus}
          className="todos-single-text"
          value={editText}
          onChange={(e) => {
            setEditText(e.target.value);
          }}
        />
      ) : todo.isDone ? (
        <s className="todos-single-text">{todo.todo}</s>
      ) : (
        <span className="todos-single-text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            setEdit(!edit);
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};
export default SingleTodo;
