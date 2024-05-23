import { useState } from "react";
import styles from './ToDoList.module.css';

const ToDoList = () => {

    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Go for a walk"]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    }

    const addTask = () => {
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    const increasePriority = (index) => {
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    const decreasePriority = (index) => {
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className={styles.todolist}>
            <div className={styles.todolist__heading}>
                <h2>Your List</h2>
            </div>
            <div className={styles.todolist__list}>
                {tasks.length > 0 ? (
                    <ul>
                        {tasks.map((element, index) => <>
                        <li key={index}>{element}
                            <button 
                                className={styles.iconButton}
                                onClick={() => deleteTask(index)}>
                                <span class="material-symbols-outlined">delete</span>
                            </button>
                            <button
                                className={styles.iconButton}
                                onClick={() => increasePriority(index)}>
                                <span class="material-symbols-outlined">keyboard_control_key</span>
                            </button>
                            <button
                                className={styles.iconButton}
                                onClick={() => decreasePriority(index)}>
                                <span class="material-symbols-outlined">keyboard_arrow_down</span>
                            </button>
                        </li></>)}
                    </ul>
                ) : (
                    <h4>No tasks</h4>
                )
                }     
                
            </div>
            <div className={styles.todolist__input}>
                <input 
                    type="text"
                    placeholder="Enter your task"
                    onChange={handleInputChange}
                    value={newTask}
                />
                <button
                    onClick={addTask}
                >
                    Add
                </button>
            </div>

        </div>
    );
}

export default ToDoList;