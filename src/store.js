import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";

import rootReducer from "./state/reducers";

const initialState = {};
const reduxStateSyncConfig = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(
      ...middleware,
      createStateSyncMiddleware(reduxStateSyncConfig)
    )
  )
);
initMessageListener(store);

export default store;
