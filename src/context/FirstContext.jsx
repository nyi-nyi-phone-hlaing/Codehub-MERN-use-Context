import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const FirstContext = createContext(null);

const FirstContextProvider = ({ children }) => {
  const [username, setUsername] = useState("WebWizard");
  return (
    <FirstContext.Provider value={{ username, setUsername }}>
      {children}
    </FirstContext.Provider>
  );
};

FirstContextProvider.propTypes = {
  children: PropTypes.node,
};

export default FirstContextProvider;
