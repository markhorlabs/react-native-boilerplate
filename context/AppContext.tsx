import React from "react";

export const AppContext = React.createContext({});

interface Props {
  children: any;
}

export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = React.useState();

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};
