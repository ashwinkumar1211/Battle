import {
  PLAYER_ADD_LIST_REQUEST,
  PLAYER_ADD_LIST_SUCCESS,
  PLAYER_ADD_LIST_FAIL,
  PLAYER_GET_LIST_REQUEST,
  PLAYER_GET_LIST_SUCCESS,
  PLAYER_GET_LIST_FAIL,
  PLAYER_UPDATE_SCORE_FAIL,
  PLAYER_UPDATE_SCORE_SUCCESS,
  PLAYER_UPDATE_SCORE_REQUEST,
} from '../constants/playerConstants';

export const addFightReducer = (state = {}, action) => {
  switch (action.type) {
    case PLAYER_ADD_LIST_REQUEST:
      return {
        loading: true,
      };
    case PLAYER_ADD_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        fight: action.payload,
      };
    case PLAYER_ADD_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const listPlayerReducer = (state = { players: [] }, action) => {
  switch (action.type) {
    case PLAYER_GET_LIST_REQUEST:
      return {
        loading: true,
        players: [],
      };
    case PLAYER_GET_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        players: action.payload,
      };
    case PLAYER_GET_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const updatePlayerfightReducer = (state = { players: [] }, action) => {
  switch (action.type) {
    case PLAYER_UPDATE_SCORE_REQUEST:
      return {
        loading: true,
      };
    case PLAYER_UPDATE_SCORE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case PLAYER_UPDATE_SCORE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
