import React, { useState, useEffect, useMemo, useCallback } from "react";

const Hooks = () => {

  const [tasks, setTasks] = useState(localStorage.getItem('tarefas') ? JSON.parse(localStorage.getItem('tarefas')) : []);
  const [input, setInput] = useState('')

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskAdd = useCallback(() => {
    if (input !== '') {
      setTasks([...tasks, input]);
      setInput('');
    }
  }, [tasks, input]);

  const total_tasks = useMemo(() => tasks.length, [tasks])

  return (
    <div>
      <h1>Hooks</h1>
      <ul>
        {tasks.map(task => (<li key={task}>{task}</li>))}
      </ul>
      <br />
      <strong>Você tem {total_tasks} Tarefas!</strong> <br />

      <input type='text' value={input} onChange={e => setInput(e.target.value)} />
      <button type="button" onClick={handleTaskAdd}>Adicionar tarefa</button>
    </div>
  );
}

export default Hooks;
