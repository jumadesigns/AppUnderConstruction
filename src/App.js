import React from "react";
import "./styles.css";
import Tvmaze from "./component/Tvmaze";

export default function App() {
  return (
    <div className="container" style={{ marginTop: "40px" }}>
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <Tvmaze />
        </div>
      </div>
    </div>
  );
}
