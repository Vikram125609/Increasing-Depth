import { useState } from "react";
import Krshnainternal from "./Krshnainternal";

export default function Krshna() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h1>This is Krshna</h1>
      <button onClick={() => setCount(count + 1)}>Update State</button>
      <Krshnainternal count={count} />
    </div>
  );
}
