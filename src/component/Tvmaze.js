import React, { useState } from "react";
import axios from "axios";

export default function Tvmaze() {
  const [apiData, setapiData] = useState("No data");
  const [state, setState] = useState("");
  const inputChange = (event) => {
    //console.log(event.target.value);
    setState(event.target.value);
  };
  const getData = () => {
    // console.log(state);
    // http://api.tvmaze.com/search/shows?q=girls
    axios.get(`https://api.tvmaze.com/search/shows?q=${state}`).then((data) => {
      console.log(data.data);
      //setapiData(JSON.stringify(data.data));
    });
  };
  return (
    <div>
      <input onChange={inputChange} type="text" className="form-control" />
      <button className="btn btn-success" onClick={getData}>
        Get Data
      </button>
      <p>{apiData}</p>
    </div>
  );
}
