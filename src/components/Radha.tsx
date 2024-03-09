import Radhainternal from "./Radhainternal";
import { useRecoilState } from "recoil";
import { radhaCounter } from "@/utils/atom";

export default function Radha() {
  const [radhaCount, setRadhaCount] = useRecoilState(radhaCounter);
  return (
    <div>
      <h1>This is Radha</h1>
      <button onClick={() => setRadhaCount(radhaCount + 1)}>Update State</button>
      <Radhainternal />
    </div>
  );
}
