import React, { useState } from 'react';
import './App.css';
import Todo from './Todo'

function App() {
  const [todos,setTodos]=useState(['Take Dog out','Take the rubbish out','hell yeah!'])
  const [input,setInput] = useState('')
  console.log("❤",input)

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
