import { useContext } from "react";
import Child2 from "./Child2";
import { FirstContext } from "../context/FirstContext";

const Child1 = () => {
  const providerValue = useContext(FirstContext);
  console.log("From Child1 ", providerValue);
  return (
    <div>
      <h1>Child1</h1>
      <Child2 />
    </div>
  );
};

export default Child1;
