import { combineReducers } from "redux";

import story from "./story/reducer";

// combineReducers is used to make future work more easy
// It is helpfull to use conbineReducer if we have more than one reducer in our appliation
const rootReducer = combineReducers({
  story
});

export default rootReducer;
