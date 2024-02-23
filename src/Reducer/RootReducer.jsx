import { combineReducers } from "redux";
import CounterReducer from "./Counter";
import TodoReducer from "./Todo";

const RootReducer = combineReducers({ CounterReducer, TodoReducer});

export default RootReducer;
