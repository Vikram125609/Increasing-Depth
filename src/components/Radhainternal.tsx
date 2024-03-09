import { radhaCounter } from "@/utils/atom";
import { useRecoilValue } from "recoil";

export default function Radhainternal() {
  const radhaCount = useRecoilValue(radhaCounter);
  return (
    <h1>
      This is Radhainteral and the count is via props and the count is{" "}
      {radhaCount}
    </h1>
  );
}
