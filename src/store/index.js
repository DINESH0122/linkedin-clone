import {createStore , applyMiddleware} from "react";
import { ThunkMiddleware } from "redux-thunk";
import rootReducer from "../reducers"


const store = createStore (rootReducer,applyMiddleware(thunkMiddleware));

export default store;