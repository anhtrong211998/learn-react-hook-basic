import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import { Todo } from './views/Todo';
import Covid from './views/Covid';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Blog from './views/Blog';
import DetailBlog from './views/DetailBlog';
import AddNewBlog from './views/AddNewBlog';
import NotFound from './views/NotFound';

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

  //// useEffect
  //// didmount
  // useEffect(() => {
  //   console.log('run use effect');
  // }, [address]);

  //// didUpdate
  useEffect(() => {
    console.log('run use effect');
  }, [todos, address]);

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
    let newTodo = {
      id: Math.floor((Math.random() * 100000) + 1),
      title: address,
      type: 'eric'
    }
    setTodos([...todos, newTodo])
    setAddress('')
  }

  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter(item => item.id !== id)
    setTodos(currentTodos)
  }
  //re-render

  return (
    <BrowserRouter>
      <div className="App">

        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <Covid />
          </Route>
          <Route path="/timer">
            <CountDown />
            <span>---------------------</span>
            <NewCountDown />

          </Route>
          <Route path="/todo">
            <Todo
              todos={todos}
              title={'All todos'}
              deleteDataTodo={deleteDataTodo}
            />
            <input type="text" value={address} onChange={(event) => handleOnchangeInput(event)} />
            <button type="button" onClick={(event) => handleEventClick(event)}>Click me</button>
          </Route>

          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/blog/:id">
            <DetailBlog />
          </Route>
          <Route path="/add-new-blog" exact>
            <AddNewBlog />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
