import React from "react";
import { AppUI } from "./AppUI";
import './App.css';
import { Provider } from "../Context";

function App() {
  return (
    <Provider>

      <AppUI />

    </Provider>
  );
}

export default App;
