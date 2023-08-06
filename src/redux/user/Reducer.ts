import {Action} from '../../types/commonTypes';

const initialState = {};

const UserReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default UserReducer;
