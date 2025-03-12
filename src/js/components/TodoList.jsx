import React, { useState } from "react";

const TodoList = () => {
    const [tasks, setTasks] = useState([]); 
    const [newTask, setNewTask] = useState(""); 
    const [hover, setHover] = useState(null);

    const inputChange = (e) => {
        setNewTask(e.target.value);
    };

    const enterKeyDown = (e) => {
        if (e.key === "Enter" && newTask.trim() !== "") {
            setTasks([...tasks, newTask]); 
            setNewTask(""); 
        }
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="card">
            <div className="card-body">

                <input 
                type="text" 
                name="item" 
                id="todoItem"
                value={newTask}
                placeholder="Añadir tarea"
                onChange={inputChange}
                onKeyDown={enterKeyDown} 
                />

                <ul className="list-group mt-3">
                    {tasks.length === 0 ? (
                        <li className="list-group-item text-muted">No hay tareas, añadir tareas</li>
                    ) : (
                        tasks.map((task, index) => (
                            <li key={index} 
                                className="list-group-item d-flex justify-content-between align-items-center"
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(null)}
                            >
                                {task}
                                {hover === index && (
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deleteTask(index)}
                                    >
                                        ❌
                                    </button>
                                )}
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};

export default TodoList;