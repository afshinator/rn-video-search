import * as React from "react";
import { createContext, useReducer } from "react";
import { QueryClient, useQuery } from "react-query";

import endpoints from "./../constants/endpoints";
import creds from "./../constants/credentials";
let Vimeo = require("vimeo").Vimeo;
const { clientId, clientSecret, accessToken } = creds.vimeo;
let client = new Vimeo(clientId, clientSecret, accessToken);

interface GlobalStateType {
  selectedProviders: { [index: string]: boolean } ;
  queries: { youtube: {}; vimeo: {}; bing: {} };
  queryRequested: boolean;
}

const initialState = {
  selectedProviders: {
    youtube: true,
    vimeo: true,
    bing: true,
    filter: true,
  },
  queryRequested: false,
  queries: {
    youtube: null,
    vimeo: null,
    bing: null,
  },
};

const queryClient = new QueryClient();

function runAndSaveUseQueries(keywords: string, state: GlobalStateType) {
  const yout = endpoints.rapidapi.youtube;
  if (state.selectedProviders.youtube) {
    state.queries.youtube = useQuery(["youtube", keywords], () => {
      return fetch(yout.endpoint + keywords, yout.options).then((response) =>
        response.json()
      );
    });
  }
}

const DataContext = createContext<{
  state: GlobalStateType;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

DataContext.displayName = "DataContext";

function reducer(
  state: GlobalStateType,
  action: { data: string; type: string }
) {
  const newState: GlobalStateType = {
    ...state,
  };

  switch (action.type) {
    case "TOGGLE_INCLUDE_PROVIDER":
      newState.selectedProviders[action.data] = !newState.selectedProviders[
        action.data
      ];
      return newState;
    case "NEW_QUERY":
      newState.queryRequested = true;
      runAndSaveUseQueries(action.data, state);
      return newState;
    default:
      return state;
  }
}

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
