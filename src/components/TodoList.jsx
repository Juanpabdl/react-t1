import React from "react";

function TodoList({taskList}){

    /*const chk = taskList.map((task,index) => {
        return <li key={index}>{task}</li>
    });*/

    return( 
        <div className="todo-list">
            {taskList.length ? 
            <ul>
                {taskList.map((task,index) => {
                    return <li key={index}>{task}</li>
                })}
            </ul> 
            :
            "No tasks"}
        </div>   
    )
}
export default TodoList;