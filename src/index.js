import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// reducer function to handle AutomationSchool likes rendering
const likesReducer = (
  state = {
    likes: 0,
  },
  action
) => {
  switch (action.type) {
    case "ADD_LIKE":
      state = {
        ...state,
        likes: state.likes + action.payload
      };
      break;
    case "REMOVE_LIKE":
      state = {
        likes: state.likes - action.payload
      };
      break;
    default:
  }
  return state;
};

const store = createStore(likesReducer);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
