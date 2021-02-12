import { createStore } from "redux";

let initialState = {
  counter: 1,
};

let appReducer = (state = initialState, action) => {
  return state;
};
let store = createStore(appReducer);
export default store;
window.store = store;
