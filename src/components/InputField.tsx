import { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="input"
        placeholder="Enter a task..."
        className="input-box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        ref={inputRef}
      />
      <button className="input-submit" type="submit">
        ADD
      </button>
    </form>
  );
};
export default InputField;
