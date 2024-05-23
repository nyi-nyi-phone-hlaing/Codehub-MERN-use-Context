import { useContext } from "react";
import { FirstContext } from "../context/FirstContext";

const Child3 = () => {
  const { username } = useContext(FirstContext);

  return (
    <div>
      <h1>Child3 {username}</h1>
    </div>
  );
};

export default Child3;
