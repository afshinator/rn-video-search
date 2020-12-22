import * as React from "react";
import { createContext, useReducer } from 'react'

interface GlobalStateType {
  selectedProviders: { [index: string]: boolean };
}

const initialState = {
  selectedProviders: {
    youtube: true,
    vimeo: true,
    bing: true,
    filter: true,
  },
};

const DataContext = createContext<{
  state: GlobalStateType;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

DataContext.displayName = "DataContext";

function reducer(
  state: GlobalStateType,
  action: { data: string; type: string }
) {
  const newState: { selectedProviders: { [index: string]: boolean } } = {
    ...state,
  };

  switch (action.type) {
    case "TOGGLE_INCLUDE_PROVIDER":
      newState.selectedProviders[action.data] = !newState.selectedProviders[
        action.data
      ];
      return newState;
    default:
      return state;
  }
}

const DataProvider = ({ children } : { children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{state, dispatch}}>
      {children}
    </DataContext.Provider>
  )
};

export { DataContext, DataProvider };
