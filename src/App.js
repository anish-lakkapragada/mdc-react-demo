import logo from "./logo.svg";
import "./App.css";
import { Button, NumberInput } from "@mantine/core";
import { useState, useEffect } from "react";

function App() {
  const [min, setMin] = useState(5);
  const [sec, setSec] = useState(0);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (on) {
        const tempSeconds = min * 60 + sec - 1;
        setMin(Math.floor(tempSeconds / 60));
        setSec(tempSeconds % 60);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [min, on, sec]);

  return (
    <div className="App">
      <h1> Timer Application </h1>
      <h3>
        {" "}
        {min} minutes {sec}
        {" seconds"} left
      </h3>
      <NumberInput
        defaultValue={min}
        placeholder="Enter Minutes"
        label="Minutes"
        withAsterisk
        onChange={(value) => {
          setMin(value);
        }}
      />
      <NumberInput
        defaultValue={sec}
        placeholder="Enter Seconds"
        label="Seconds"
        withAsterisk
        onChange={(newSec) => {
          setSec(newSec);
        }}
      />

      <Button
        className="button"
        variant="gradient"
        gradient={{ from: "teal", to: "lime", deg: 105 }}
        onClick={() => {
          setOn(!on);
        }}
      >
        {on ? "Stop Timer" : "Start Timer"}
      </Button>
      <Button className="button" onClick={() => {setOn(false); setMin(5); setSec(0);}}> Reset Timer </Button> 
    </div>
  );
}

export default App;
