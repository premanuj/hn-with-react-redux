import thunk from "redux-thunk";

import { applyMiddleware, compose } from "redux";

const middlewareList = [];

let devTool = f => f;

middlewareList.push(thunk);

const middleware = compose(
  applyMiddleware(...middlewareList),
  devTool
);

export default middleware;
