import { useContext } from "react";
import Child3 from "./Child3";
import { FirstContext } from "../context/FirstContext";
const Child2 = () => {
  const { setUsername } = useContext(FirstContext);
  return (
    <div>
      <h1>
        Child2
        <input type='text' onChange={(e) => setUsername(e.target.value)} />
      </h1>
      <Child3 />
    </div>
  );
};

export default Child2;
