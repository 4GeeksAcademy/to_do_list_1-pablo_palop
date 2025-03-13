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
        <div>
            <div className="d-flex justify-content-center text-primary">
                <h1>To Do</h1>
            </div>
            <div className="card border-0">
                <div className="card-body">

                    <input
                        className="border-0"
                        type="text"
                        name="item"
                        id="todoItem"
                        value={newTask}
                        placeholder="Añadir tarea"
                        onChange={inputChange}
                        onKeyDown={enterKeyDown}
                    />

                    <ul className="list-group mt-3 border-bottom">
                        {tasks.length === 0 ? (
                            <li className="list-group-item text-muted">No hay tareas, añadir tareas</li>
                        ) : (
                            tasks.map((task, index) => (
                                <li key={index}
                                    className="list-group-item d-flex justify-content-between align-items-center border-bottom"
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
        </div>
    );
};

export default TodoList;