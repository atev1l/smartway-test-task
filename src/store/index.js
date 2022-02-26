import {createStore, applyMiddleware} from "redux"
import {catsReducer} from "./catsReducer";
import thunk from "redux-thunk";


export const store = createStore(catsReducer, applyMiddleware(thunk))
