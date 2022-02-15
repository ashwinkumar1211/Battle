import {
  FIGHT_RESULT_CREATE_REQUEST,
  FIGHT_RESULT_CREATE_SUCCESS,
  FIGHT_RESULT_CREATE_FAIL,
} from '../constants/fightConstants.js';

export const fightResultCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case FIGHT_RESULT_CREATE_REQUEST:
      return {
        loading: true,
      };
    case FIGHT_RESULT_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        fight: action.payload,
      };
    case FIGHT_RESULT_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
