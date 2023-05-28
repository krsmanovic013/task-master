export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

// import { useReducer } from "react";

// type Actions =
//   | { type: "add"; payload: string }
//   | { type: "remove"; payload: number }
//   | { type: "done"; payload: number };

// const TodoReducer = (state: Todo[], action: Actions) => {
//   //a
// };

// const model = () => {
//   const [state, dispatch] = useReducer(TodoReducer, []);
//   return;
// };
// export default model;
