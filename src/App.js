import Button from "./Button";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Button count={count} setCount={setCount} />
      <br />
      <Button count={count} setCount={setCount} />
    </div>
  );
}

export default App;
