import React from "react";
import { useState, useEffect } from "react";
import TodoList from "./TodoList";

function TodoForm(){
    const [newTask, setNewTask] = useState("")
    const [taskList, setTaskList] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        setTaskList([...taskList,newTask])
        setNewTask("")
    }

    useEffect(() => {
        if (taskList.length >= 10 ){
            console.log("¡Vaya! Tienes muchas tareas pendientes")
        }
    },[taskList])

    return(
        <>
            <form className="todo-form" onSubmit={handleSubmit}>
                <input
                type="text"
                className="text"
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
                />
                <button className="button"
                disabled={newTask? "" : "disabled" }
                >
                    Añadir
                </button>
            </form>
            <TodoList taskList={taskList}/>
        </>
        
    )
}
export default TodoForm;