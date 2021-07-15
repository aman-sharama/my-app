import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState(0);
 let num = 2;
  return (
    <div>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        Increment : {state}  
      </button>
    </div>
  );
}

export default App;
