import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo'
import db from './firebase'


function App() {
  const [todos,setTodos]=useState([])
  const [input,setInput] = useState('')
  console.log("❤",input)

  useEffect(() => {
    db.collection('todos').onSnapshot(snapshot=>{
      setTodos(snapshot.docs.map(doc=> doc.data().todo))
    })
  },[])

  const addTodo = (event)=>{
    event.preventDefault()
    console.log("💥","Todo Added!")
    setTodos([...todos,input])
    setInput('')
  }
  return (
    <div className="App">
      <h1> Hello Learners! </h1>
      <form>
      <input value={input} onChange={event=>setInput(event.target.value)}/>
      <button type="submit" disabled={!input} onClick={addTodo}>Add Todo</button>
      </form>
      <ul>{todos.map(todo=>(
        <Todo text={todo}/>
      ))}
      </ul>
    </div>
  );
}

export default App;
