import { useState } from 'react';
import './App.css';
import Inputfeild from './components/Inputfeild';
import TaskList from './components/TaskList';

interface Todo {
  id: number;
  task: string;
  isDone: boolean;
}

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editId, setEditId] = useState<number | null>(null);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!todo.trim()) return;


    if (editId !== null) {
      
      setTodos(todos.map(t => t.id === editId ? { ...t, task: todo } : t));
      setEditId(null);
    } else {
    
      setTodos([...todos, { id: Date.now(), task: todo, isDone: false }]);
    }

    setTodo('');
  };

  const handleToggleDone = (id: number) => {
    setTodos(todos.map(t =>
      t.id === id ? { ...t, isDone: !t.isDone } : t
    ));
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const handleEdit = (id: number) => {
    const toEdit = todos.find(t => t.id === id);
    if (toEdit) {
      setTodo(toEdit.task);
      setEditId(id);
    }
  };

  return (
    <div className="App">
      <h2 className="heading">TASK HUB</h2><br />
      <Inputfeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TaskList
        todos={todos}
        onToggleDone={handleToggleDone}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default App;
