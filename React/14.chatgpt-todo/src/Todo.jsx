import "./Todo.css";

import React, { useState } from "react"; // Importamos React y el hook useState
import { v4 as uuidv4 } from "uuid"; // Importamos uuid para generar IDs únicos

// Definimos nuestro componente TodoList como una función de flecha
const TodoList = () => {
  // Definimos el estado para almacenar la lista de tareas y el valor del input
  const [tasks, setTasks] = useState([]); // tasks es un array vacío al principio
  const [taskName, setTaskName] = useState(""); // taskName es una cadena vacía al principio

  // Función para agregar una nueva tarea
  const addTask = () => {
    if (taskName.trim() === "") return; // Evitamos agregar tareas en blanco
    const newTask = {
      id: uuidv4(), // Generamos un ID único
      name: taskName,
      completed: false, // Inicializamos como false
    };
    setTasks([...tasks, newTask]); // Agregamos la nueva tarea al estado
    setTaskName(""); // Limpiamos el valor del input
  };

  // Función para cambiar el estado completado de una tarea
  const toggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Función para eliminar una tarea
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => toggleTask(task.id)}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              color: task.completed ? "red" : "black",
            }}
          >
            {task.name}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
