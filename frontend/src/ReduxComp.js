import { useDispatch,useSelector } from 'react-redux';
import { fetchTodos } from './redux/slice/todo';
import './App.css';

 const ReduxComp = ()=> {
  const dispatch = useDispatch();

  const getData = ()=>{
       dispatch(fetchTodos())
  }

  const state = useSelector((state)=>state);
  console.log('state',state);

 
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
        <button className='button' onClick={getData}>Get API</button>
        <button className='button'>Post API</button>
        <div>
    
          {/* {!state.todo.isLoading && state.todo.data  ? 
              state.todo.data.data.map((e)=>{
          return  <ul><li className='liList'>{e.first_name}</li></ul>
              }) : <p>Loading...</p>
          } */}
        </div>
    </div>


  );
}

export default ReduxComp