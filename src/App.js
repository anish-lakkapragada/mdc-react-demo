import logo from "./logo.svg";
import "./App.css";
import { Button, Input } from "@mantine/core";
import { useState } from "react";

function App() {
  const [x, setX] = useState(2);
  return (
    <div className="App">
      <h1> React is Easy {x} </h1>
      <Button
        onClick={() => {
          setX(x + 1);
        }}
      >
        {" "}
        This is A Button{" "}
      </Button>
      <Input placeholder="Your Social Security Number" />
      <p> React is a web framework to help style things. </p>
    </div>
  );
}

export default App;
