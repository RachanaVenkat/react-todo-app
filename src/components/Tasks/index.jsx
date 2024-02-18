import styles from './tasks.module.css'
import Task from '../Task/index'

export default function Tasks({todos, deleteTodo, toggleTodo, editTodo}){
    const taskQty = todos.length;
    const completedTodos = todos.filter(todo => todo.completed).length;

    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Created tasks</p>
                    <span>{taskQty}</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Completed tasks</p>
                    <span>{completedTodos} of {taskQty}</span>
                </div>
            </header>

            <div className={styles.list}>
                {todos.map((todo) => (
                    <Task key={todo.id} todo={todo}
                        deleteTodo={()=>deleteTodo(todo.id)}
                        toggleTodo = {()=>toggleTodo(todo.id)}
                        editTodo = {editTodo}
                        />
                ))}
            </div>
        </section>
    )
}