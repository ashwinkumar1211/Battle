import {
  TEAM_CREATE_REQUEST,
  TEAM_CREATE_SUCCESS,
  TEAM_CREATE_FAIL,
  TEAM_TOP_REQUEST,
  TEAM_TOP_SUCCESS,
  TEAM_TOP_FAIL,
} from '../constants/teamConstants';

export const addTeamReducer = (state = {}, action) => {
  switch (action.type) {
    case TEAM_CREATE_REQUEST:
      return {
        loading: true,
      };
    case TEAM_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        team: action.payload,
      };
    case TEAM_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const listTopTeamReducer = (state = { teams: [] }, action) => {
  switch (action.type) {
    case TEAM_TOP_REQUEST:
      return {
        loading: true,
        teams: [],
      };
    case TEAM_TOP_SUCCESS:
      return {
        loading: false,
        teams: action.payload,
      };
    case TEAM_TOP_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
