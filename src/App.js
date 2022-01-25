import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';

function App() {
    //// state in function compoennt 
    const [name, setName] = useState('HoiDanIT');
    const [address,setAddress] = useState('');

    //// handle event
    const handleOnChange = (event) => {
      setAddress(event.target.value);
    }

    const handleOnClick = (event) =>{
      setName(address);
    }
    //re-render
  
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and {name}!</h1>
        <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} />
        <button type="button" onClick={(event) => handleOnClick(event)}>Click me</button>
      </header>
    </div>
  );
}

export default App;
