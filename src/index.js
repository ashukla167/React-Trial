import App from "./app.js";
import React from "react";
import ReactDOM from "react-dom";

var Root = document.createElement("div");
Root.id = "root";
document.body.appendChild(Root);

ReactDOM.render(<App />, document.getElementById("root"));
