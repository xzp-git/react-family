import React from "react";
import ReactDOM from "react-dom/client";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Counter1 />
    <hr />
    <Counter2 />
  </>
);
