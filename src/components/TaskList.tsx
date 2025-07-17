
import React from 'react';

interface Todo {
  id: number;
  task: string;
  isDone: boolean;
}

interface Props {
  todos: Todo[];
  onToggleDone: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const TaskList: React.FC<Props> = ({ todos, onToggleDone, onDelete, onEdit }) => {
  return (
    <div className="task-list">
      {todos.map((todo) => (
        <div key={todo.id} className="task-card">
          <input
            type="checkbox"
            checked={todo.isDone}
            onChange={() => onToggleDone(todo.id)}
          />
          <span
            style={{ 
              textDecoration: todo.isDone ? 'line-through' : 'none',
              marginLeft: '10px',
              flex: 1
            }}
          >
            {todo.task}
          </span>
          <button onClick={() => onEdit(todo.id)}>✏️</button>
          <button onClick={() => onDelete(todo.id)}>🗑️</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
