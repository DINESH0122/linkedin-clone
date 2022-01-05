import {combineReducers} from "react";
import  userReducer  from "./userReducer";

const rootReducer = combineReducers({
  userState : userReducer
});

export default rootReducer;