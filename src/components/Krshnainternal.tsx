import { krshnaCounter } from "@/utils/atom";
import { useRecoilValue } from "recoil";

export default function Krshnainternal() {
  const krshnaCount = useRecoilValue(krshnaCounter);
  return (
    <h1>
      This is Krshnainteral and the count is via props and the count is{" "}
      {krshnaCount}
    </h1>
  );
}
