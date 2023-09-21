import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Main.css";

const Main = () => {
  // Declaramos dos estados usando el hook useState de React.
  // 1. todoList: Almacena la lista de tareas pendientes.
  // 2. task: Almacena el valor actual del input de entrada de texto.
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");

  // Esta función agrega una nueva tarea a la lista.
  const addTodo = () => {
    // Creamos un nuevo objeto 'newTask' con la tarea ingresada,
    // establecemos 'completed' como falso y generamos un 'id' único usando uuidv4().
    const newTask = {
      name: task,
      completed: false,
      id: uuidv4(),
    };
    
    // Actualizamos la lista de tareas añadiendo el nuevo objeto al final del arreglo 'todoList'.
    // También, reiniciamos el valor del input a una cadena vacía.
    setTodoList([...todoList, newTask]);
    setTask("");
  };

  // Esta función elimina una tarea de la lista basada en su 'id'.
  const deleteTodo = (id) => {
    // Usamos el método 'filter' para crear una nueva lista sin la tarea que coincide con el 'id'.
    const newTodoList = todoList.filter((item) => item.id !== id);
    
    // Actualizamos la lista de tareas con la nueva lista filtrada.
    setTodoList(newTodoList);
  };

  // Esta función cambia el estado 'completed' de una tarea específica.
  const completeTodo = (todo) => {
    // Creamos una copia temporal de la lista de tareas.
    let temporalTodo = todoList;
    
    // Encontramos la posición de la tarea en la lista temporal.
    const position = temporalTodo.indexOf(todo);
    
    // Cambiamos el estado 'completed' de la tarea en la lista temporal.
    temporalTodo[position].completed = !temporalTodo[position].completed;
    
    // Actualizamos la lista de tareas con la lista temporal modificada.
    setTodoList([...temporalTodo]);
  };

  return (
    <main>
      <div>
        {/* Input para ingresar una nueva tarea. Su valor está vinculado al estado 'task'. */}
        <input
          type="text"
          placeholder="Task..."
          value={task}
          onInput={(ev) => setTask(ev.target.value)}
        />
        {/* Botón que llama a la función 'addTodo' para agregar una tarea nueva. */}
        <button onClick={addTodo}>Add</button>
      </div>
      {/* Lista de tareas representadas como elementos de lista. */}
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>
            {/* El texto de la tarea se muestra como encabezado <h3>. */}
            {/* Al hacer clic en el encabezado, se llama a la función 'completeTodo'. */}
            <h3
              className={item.completed ? "completed" : ""}
              onClick={() => completeTodo(item)}
            >
              {item.name}
            </h3>
            {/* Botón para eliminar la tarea que llama a la función 'deleteTodo'. */}
            <button onClick={() => deleteTodo(item.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
