import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom'

 const ZustandComp = ()=> {
    return (
      <div className="App">
      <div className='welcome'>
     <h1>Zustand</h1>
     <p>A small, fast, and scalable bearbones state management solution. Zustand has a comfy API based on hooks. 
      It isn't boilerplatey or opinionated, but has enough convention to be explicit and flux-like.
      Don't disregard it because it's cute, it has claws! Lots of time was spent to deal with common pitfalls,
       like the dreaded zombie child problem, React concurrency, and context loss between mixed renderers.
        It may be the one state manager in the React space that gets all of these right
       </p>
   </div>
       <button className='button'>Get API</button>
       <button className='button'>Post API</button>
   </div>
    );
  }

  export default ZustandComp;