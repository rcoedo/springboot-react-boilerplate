import { List } from "immutable";
import { combineReducers } from "redux";
import { ADD_ACTION } from "app/actions";

function count(state = 0, action) {
  switch (action.type) {
  case ADD_ACTION:
    return state + 1;
  default:
    return state;
  }
}

const reducers = {
  count
};

export default reducers;
