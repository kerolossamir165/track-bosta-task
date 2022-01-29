import { useState, createContext } from "react";
const DataContext = createContext();

let Provider = ({ children }) => {
  let [data, setData] = useState(null);

  let value = { data, setData };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { Provider, DataContext };
