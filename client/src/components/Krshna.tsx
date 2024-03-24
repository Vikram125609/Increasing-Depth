import { useRecoilState } from "recoil";
import Krshnainternal from "./Krshnainternal";
import { krshnaCounter } from "@/utils/atom";

export default function Krshna() {
  const [krshnaCount, setKrshnaCount] = useRecoilState(krshnaCounter);
  return (
    <div>
      <h1>This is Krshna</h1>
      <button onClick={() => setKrshnaCount(krshnaCount + 1)}>Update State</button>
      <Krshnainternal />
    </div>
  );
}
