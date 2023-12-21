import { createContext, ReactNode, useEffect, useReducer } from "react";


import { GetAllSectors } from "./actions/sectorsActions";
import genericReducer, { defaultData } from "./reducers/genericReducers";

export const GLobalContext = createContext({
  sectorsState: defaultData,
  sectorsDispatch: () => {},

});

const GlobalProvider = ({ children }) => {
  const [sectorsState, sectorsDispatch] = useReducer(genericReducer, defaultData);
 

  useEffect(() => {
    (async () => {
     GetAllSectors(sectorsDispatch)
    })();
  }, []);
  return (
    <GLobalContext.Provider
      value={{
   sectorsDispatch,sectorsState
      }}
    >
      {children}
    </GLobalContext.Provider>
  );
};

export default GlobalProvider;