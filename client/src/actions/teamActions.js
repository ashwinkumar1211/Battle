import {
  TEAM_CREATE_REQUEST,
  TEAM_CREATE_SUCCESS,
  TEAM_CREATE_FAIL,
  TEAM_TOP_REQUEST,
  TEAM_TOP_SUCCESS,
  TEAM_TOP_FAIL,
} from '../constants/teamConstants';
import axios from 'axios';

export const createTeam = team => async (dispatch, getState) => {
  try {
    dispatch({ type: TEAM_CREATE_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(`/api/team/addteam`, team, config);

    dispatch({
      type: TEAM_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TEAM_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listTopTeams = () => async dispatch => {
  try {
    dispatch({ type: TEAM_TOP_REQUEST });
    const { data } = await axios.get(`/api/team`);

    dispatch({
      type: TEAM_TOP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TEAM_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
