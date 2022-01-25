import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';
import { Todo } from './views/Todo';

function App() {
  //// state in function compoennt 
  const [name, setName] = useState('HoiDanIT');
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Watching Hoi Dan IT Channel', type: 'eric' },
    { id: 'todo2', title: 'Doing homework', type: 'eric' },
    { id: 'todo3', title: 'Playing game', type: 'hoidanit' },
    { id: 'todo4', title: 'Reading books', type: 'hoidanit' }
  ]);

  //// handle event
  const handleOnChange = (event) => {
    setAddress(event.target.value);
  }

  const handleOnClick = (event) => {
    //setName(address);
    event.preventDefault();
    if (!address) {
      alert('emtpy input')
      return;
    }
    //hook not merge state
    //...spread syntax array js
    let newTodo = { id: 'abc', title: address, type: 'eric' }
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

        <Todo todos={todos}
          title={`All todos`} />

        <Todo
          todos={todos.filter(item => item.type === 'eric')}
          title={`TrongHD3's todos`}
        />

        <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} />
        <button type="button" onClick={(event) => handleOnClick(event)}>Click me</button>
      </header>
    </div>
  );
}

export default App;
