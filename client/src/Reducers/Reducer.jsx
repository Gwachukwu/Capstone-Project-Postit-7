import { ADD_USER, CREATE_GROUP } from "./actions";
import { initialState } from "./initialState";


export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return state;
    case CREATE_GROUP:
      let arr = [...state.groups]
      state.groups=[...arr,action.newGroup]
      return state;
    default:
      return state;
  }
};
