import { useState } from "react";
import Radhainternal from "./Radhainternal";

export default function Radha() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h1>This is Radha</h1>
      <button onClick={() => setCount(count + 1)}>Update State</button>
      <Radhainternal count={count} />
    </div>
  );
}
