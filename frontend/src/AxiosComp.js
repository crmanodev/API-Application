import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { getEmptyArrObjStatus } from "./utils/getEmptyArrObjStatus";

const AxiosComp = () => {
  const [axiosData, setAxiosData] = useState([]);

  useEffect(() => {
    console.log("Axios Page Render");
  }, []);
  
  const getData = async () => {
    const getUrl = `https://reqres.in/api/users?page=2`;

    let dataFromAPI = await axios.get(getUrl);
    if (getEmptyArrObjStatus(dataFromAPI)) {
      setAxiosData(dataFromAPI.data);
    }
  };

  const postData = async () => {
    const getUrl = `https://reqres.in/api/users`;
    let nameData = {
      name: "Crdev",
      job: "Developer",
    };
    await axios.post(getUrl, nameData).then(function (response) {
      console.table("Response is", response?.data);
    });
  };

  console.log("axiosData",axiosData);

  return (
    <div className="App">
      <div className="welcome">
        <h1>Axios</h1>
        <p>
          Axios is a promise-based HTTP Client for node.js and the browser. It
          is isomorphic (= it can run in the browser and nodejs with the same
          codebase). On the server-side it uses the native node.js http module,
          while on the client (browser) it uses XMLHttpRequests.
        </p>
      </div>
      <button className="button" onClick={getData}>
        Get API
      </button>
      <button className="button" onClick={postData}>
        Post API
      </button>
    </div>
  );
};

export default AxiosComp;
