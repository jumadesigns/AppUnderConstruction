import React, { useState } from "react";
import axios from "axios";

export default function Tvmaze() {
  const [apiData, setapiData] = useState("JSON Data will logged in console");
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
      /*this is the option to send the JSON Data to the window but 
      i choose to send it to the console so it can come as a full object*/
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
