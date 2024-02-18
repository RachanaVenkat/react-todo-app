import styles from './task.module.css'
import { TbTrash } from 'react-icons/tb';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { MdDoneOutline } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { useState, useEffect } from 'react';

export default function Task({todo, deleteTodo, toggleTodo, editTodo}){
    const [text, setText] = useState(todo.text);
    const [isEditing, setIsEditing] = useState(false);
    const [originalText, setOriginalText] = useState(todo.text);


    const handleEditClick = () => {
        if (isEditing) {
            // If already in editing mode, cancel changes and revert to original text
            setText(originalText);
            setIsEditing(false);
        } else {
            // Enter editing mode
            setIsEditing(true);
            // Store original text
            setOriginalText(text);
        }
    }

    const handleUpdateClick = () => {
        setIsEditing(false);
        editTodo(todo.id,text)
    }

    const handleChange = (evt) => {
        setText(evt.target.value);
    }

    return (
        <div className={styles.task} >
            <button className={styles.checkContainer} onClick={() => toggleTodo(todo.id)}>
                {todo.completed ? <BsFillCheckCircleFill/>: <div/>}
            </button>

            {isEditing ? (
                <form onSubmit={handleUpdateClick} >
                    <input type="text" value={text} onChange={handleChange} className={styles.textInput}/>
                    <button type="submit" className={styles.editButton}><MdDoneOutline size={20}/></button>
                </form>
            ) : (
                <p className={todo.completed?styles.textCompleted: ""}>{todo.text}</p>
            )}

            {isEditing==false&&<button className={styles.editButton} onClick={handleEditClick}>
                <TbEdit size={20}/>
            </button>}
            
            <button className={styles.deleteButton} onClick={deleteTodo}>
                <TbTrash size={20}/>
            </button>
        </div>
    )
}