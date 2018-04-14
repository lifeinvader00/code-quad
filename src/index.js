import React from "react";
import { render } from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import firebase from "./firebase/firebase";
import { start__setArticles } from "./actions";
import theme from "./theme/theme";
import configureStore from "./store/storeConfig";
import AppRouter from "./router/AppRouter";
import "./ui/Global";

const appRoot = document.getElementById("root");

const store = configureStore();

console.log("----- Initial State -----");
console.log(store.getState());
console.log("---------------");

const ComposedApp = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </Provider>
);

const Loading = () => <div>Loading...</div>;

render(<Loading />, appRoot);

/**
 * Figure out user experience on app load
 * Figure out user experience on login
 * Figure out admin experience on login
 */

try {
  store.dispatch(start__setArticles());
  render(<ComposedApp />, appRoot);
} catch (error) {
  throw error;
}

registerServiceWorker();
