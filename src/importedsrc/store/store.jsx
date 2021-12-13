import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import logInReducer from "../reducers/logInReducer";
import signUpReducer from "../reducers/signUpReducer";
import itemReducer from "../reducers/ItemReducer";

const reducer = combineReducers({
    login: logInReducer,
    signUp: signUpReducer,
    items: itemReducer,
});
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
