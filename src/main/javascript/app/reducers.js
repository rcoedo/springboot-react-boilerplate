import { List } from "immutable";
import { combineReducers } from "redux";
import { MOCK_ACTION } from "app/actions";

function texts(state = new List(), action) {
  switch (action.type) {
  case MOCK_ACTION:
    return state.push(action.text);
  default:
    return state;
  }
}

const mockApp = combineReducers({
  texts
});

export default mockApp;