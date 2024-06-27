import { useState } from "react";
import Schedule from "./components/Schedule";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Schedule />
    </>
  );
}

export default App;
