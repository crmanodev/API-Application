import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AxiosComp from "./AxiosComp";
import ReduxComp from "./ReduxComp";
import ZustandComp from "./ZustandComp";
import Home from "./Home";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/axios">Axios</Link>
          </li>
          <li>
            <Link to="/redux">Redux</Link>
          </li>
          <li>
            <Link to="/zustand">Zustand</Link>
          </li>
        
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/axios" element={<AxiosComp />}></Route>
        <Route path="/redux" element={<ReduxComp />}></Route>
        <Route path="/zustand" element={<ZustandComp />}></Route>
      </Routes>
    </>
  );
}

export default App;
