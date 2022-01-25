import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';

function App() {
    //// state in function compoennt 
    const [name, setName] = useState('HoiDanIT');
    const [address,setAddress] = useState('');
    const [todos, setTodos] = useState([
      { id: 'todo1', title: 'Watching Hoi Dan IT Channel' },
      { id: 'todo2', title: 'Doing homework' },
      { id: 'todo3', title: 'Playing game' }
    ]);

    //// handle event
    const handleOnChange = (event) => {
      setAddress(event.target.value);
    }

    const handleOnClick = (event) =>{
      //setName(address);
      event.preventDefault();
      if (!address) {
        alert('emtpy input')
        return;
      }
      //hook not merge state
      //...spread syntax array js
      let newTodo = { id: 'abc', title: address }
      setTodos([...todos, newTodo])
      setAddress('')
    }
    //re-render
  
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and {name}!</h1>

        <div className="todos-container" style={{textAlign:'left'}}>
          {todos.map(todo => {
            return (
              <li className="todo-child" key={todo.id}> {todo.title}</li>
            )
          })}
        </div>

        <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} />
        <button type="button" onClick={(event) => handleOnClick(event)}>Click me</button>
      </header>
    </div>
  );
}

export default App;
