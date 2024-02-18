import Header from "./components/Header"
import Tasks from "./components/Tasks"
import Footer from "./components/Footer"
import { useState, useEffect, useRef } from "react"

const getInitialData = () => {
  try {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (!data) {
      console.log("No todos data found in local storage.");
      return [];
    }
    return data;
  } catch (error) {
    console.error("Error parsing JSON data from local storage:", error);
    return [];
  }
};

function App() {
  const [todos, setTodos] = useState(getInitialData())
  const noteRef = useRef({})

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])
  
  const addTodo = (text) => {
    const id = crypto.randomUUID();
    setTodos(prevTodos => {
      return [...prevTodos, {text:text, id:id, completed:false,editing:false}]
    })
  }

  const deleteTodo = (id) => {
    setTodos(prevTodos=>{
      return prevTodos.filter(t => t.id !== id)
    })
  }

  const toggleTodo = (id) => {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if(todo.id===id){
          return {...todo, completed: !todo.completed}
        } else {
          return todo
        }
      })
    })
  }

  const editTodo = (id, newText) => {
    setTodos((prevTodos) =>
        prevTodos.map((todo) =>
            todo.id === id ? { ...todo, text: newText } : todo
        )
    );
};

  return (
    <>
     <Header addTodo={addTodo}/>
     <Tasks 
        todos={todos} 
        deleteTodo={deleteTodo} 
        toggleTodo={toggleTodo} 
        editTodo={editTodo}
        />
     <Footer/>
    </>
  )
}

export default App
