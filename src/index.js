import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css";
import setAuthorizationHeader from "./utils/setAuthorizationHeader";
import {
  fetchCurrentUserSuccess,
  fetchCurrentUserRequest
} from "./actions/users";
import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import ro from "react-intl/locale-data/ro";
import { Provider } from "react-redux";
import rootReducer from "./rootReducer";
import { createStore, applyMiddleware } from "redux/es/redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootSaga from "./rootSaga";
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
sagaMiddleware.run(rootSaga);

if (localStorage.bookwormJWT) {
  setAuthorizationHeader(localStorage.bookwormJWT);
  store.dispatch(fetchCurrentUserRequest());
} else {
  store.dispatch(fetchCurrentUserSuccess({}));
}

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
