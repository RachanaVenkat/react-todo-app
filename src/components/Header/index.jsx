import styles from './header.module.css'
import todologo from '../../assets/todoLogo.svg'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';
import { GiSandsOfTime } from "react-icons/gi";

export default function Header({addTodo}){
    const [text, setText] = useState("")

    const handleChange = (evt) => {
        setText(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        addTodo(text)
        setText("")
    }

    const isDisabled = text ===''

    return(
        <header className={styles.header}>
           {/* <img src={todologo} /> */}
           
           <h1 className={styles.firstH1}><GiSandsOfTime />Chore</h1><h1 className={styles.secondH1}>Check</h1>

           <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input type="text" value={text} placeholder='add your task' onChange={handleChange}/>
                <button disabled={isDisabled}>Create <AiOutlinePlusCircle size={21} /></button>
           </form>
        </header>
    )
}