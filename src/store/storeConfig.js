import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
  applyEnhancers
} from "redux";
import thunk from "thunk";
import { articles, filters, auth } from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  return createStore(
    combineReducers({
      articles,
      filters,
      auth
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
};

export default configureStore;
