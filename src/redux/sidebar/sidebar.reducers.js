import { SidebarActionTypes } from './sidebar.types';

const INITIAL_STATE = {
  hidden: false
};

const sidebarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SidebarActionTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        hidden: action.payload
      };
    default:
      return state;
  }
};

export default sidebarReducer;