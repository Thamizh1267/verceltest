import CounterReducer from "./Reducer";
import {createStore} from "redux";

const Store = createStore(CounterReducer);

export default Store;