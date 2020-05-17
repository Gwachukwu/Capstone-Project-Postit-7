import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { taskReducer } from "./Reducers/Reducer";
import { createStore, compose } from "redux";
import { createGroup } from "./Reducers/actions";
import { v4 as uuidv4 } from "uuid";
const store = createStore(
  taskReducer,
  compose(
    typeof window === "object" &&
      typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : (f) => f
  )
);
let newGroup = {
  groupId: uuidv4(),
  groupName: "My group",
  groupDescription: "sweetest group",
  groupMembers: ["Gwachukwu", "Raphael", "Henry"],
  groupMessages: [],
};
store.dispatch(createGroup(newGroup));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
