
// store.js

import { createStore } from 'redux';

const initialState = {
  userName: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_NAME':
      return {
        ...state,
        userName: action.payload
      };
    default:
      return state;
  }
};

const store = createStore(userReducer);

export default store;
