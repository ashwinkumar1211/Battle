import {
  FIGHT_RESULT_CREATE_REQUEST,
  FIGHT_RESULT_CREATE_SUCCESS,
  FIGHT_RESULT_CREATE_FAIL,
  FIGHT_RESULT_LIST_REQUEST,
  FIGHT_RESULT_LIST_SUCCESS,
  FIGHT_RESULT_LIST_FAIL,
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

export const fightTableReducer = (state = { fights: {} }, action) => {
  switch (action.type) {
    case FIGHT_RESULT_LIST_REQUEST:
      return {
        loading: true,
        fights: [],
      };
    case FIGHT_RESULT_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        fights: action.payload.fights,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case FIGHT_RESULT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
