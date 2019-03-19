import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css";
import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import ro from "react-intl/locale-data/ro";
import { Provider } from "react-redux";
import rootReducer from "./rootReducer";
import { createStore, applyMiddleware } from "redux/es/redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import history from "./history";
import { localeSet } from "./actions/locale";
import { Router, Route } from "react-router-dom";
import createSagaMiddleware from "redux-saga";

addLocaleData(en);
addLocaleData(ro);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, thunk))
);

if (localStorage.alhubLang) {
  store.dispatch(localeSet(localStorage.alhubLang));
}

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <Route component={Main} />
    </Provider>
  </Router>,
  document.getElementById("root")
);
