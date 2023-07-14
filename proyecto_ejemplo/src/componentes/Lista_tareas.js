import React from 'react';
import "../styles/lista_tareas.css";

function Lista_tareas() {
    const [tasks, setTasks] = React.useState([]);
    const [newTask, setNewTask] = React.useState("");

    function handdleInputChange(event) {
        setNewTask(event.target.value);
    }
    function addTask() {
        newTask.trim() != "" ? setTasks([...tasks, newTask]) : console.log("campo vacio");
        setNewTask("");
    }
    const listar = tasks.map((tarea, index) =>
        <li key={index}>{tarea} <button key={index} onClick={() => { deleteTask(index) }}>Eliminar</button> </li>
    );
    function deleteTask(index) {
        const updateTasks = tasks.filter((_, i) => i != index);
        setTasks(updateTasks);
    }
    return (
        <div className='tareas_box'>
            <h3>Lista de Tareas</h3>
            <input type="text" onChange={handdleInputChange} />
            <button onClick={addTask}>Agregar Tarea</button>
            <ul>{listar}</ul>
        </div>
    );
}

export default Lista_tareas;