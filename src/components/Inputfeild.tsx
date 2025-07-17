
import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const Inputfeild: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="Enter your task here..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Go</button>
    </form>
  );
};

export default Inputfeild;
