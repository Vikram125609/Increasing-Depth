import { krshnaCounter } from "@/utils/atom";
import { useRecoilValue } from "recoil";

export default function Krshnainternal() {
  const krshnaCount = useRecoilValue(krshnaCounter);
  return (
    <h1>
      <h1>So the issue here was <span className="text-red-500">When the parent state is change and you pass the state via props the child state will gone a reset to original value so in that case you can use recoil or move your state to upper level</span></h1>
      This is Krshnainteral and the count is via recoil and the count is{" "}
      {krshnaCount}
    </h1>
  );
}
