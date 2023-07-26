import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom'

 const ReduxComp = ()=> {
  return (
    <div className="App">
       <div className='welcome'>
      <h1>Redux</h1>
      <p>Redux helps you write applications that behave consistently, run in different environments (client, server, and native),
         and are easy to test.Centralizing your application's state and logic enables powerful capabilities like undo/redo, 
         state persistence, and much more.The Redux DevTools make it easy to trace when, where, why, and how your application's state
          changed. Redux's architecture lets you log changes, use "time-travel debugging", and even send complete error 
          reports to a server.
        </p>
    </div>
        <button className='button'>Get API</button>
        <button className='button'>Post API</button>
    </div>
  );
}

export default ReduxComp