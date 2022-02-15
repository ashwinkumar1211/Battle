import {
  PLAYER_ADD_LIST_REQUEST,
  PLAYER_ADD_LIST_SUCCESS,
  PLAYER_ADD_LIST_FAIL,
  PLAYER_GET_LIST_REQUEST,
  PLAYER_GET_LIST_SUCCESS,
  PLAYER_GET_LIST_FAIL,
  PLAYER_UPDATE_SCORE_REQUEST,
  PLAYER_UPDATE_SCORE_SUCCESS,
  PLAYER_UPDATE_SCORE_FAIL,
} from '../constants/playerConstants.js';
import axios from 'axios';

export const addPlayer = (playername, teamname) => async dispatch => {
  try {
    dispatch({ type: PLAYER_ADD_LIST_REQUEST });
    const { data } = await axios.post(`/api/players/addplayer`, {
      playername,
      teamname,
    });

    dispatch({
      type: PLAYER_ADD_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PLAYER_ADD_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listPlayersAll = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PLAYER_GET_LIST_REQUEST });
    const { data } = await axios.get(`/api/players`);

    dispatch({
      type: PLAYER_GET_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PLAYER_GET_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updatePlayerScore = player => async (dispatch, getState) => {
  try {
    dispatch({ type: PLAYER_UPDATE_SCORE_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.put(
      `/api/player/${player._id}`,
      player,
      config
    );

    dispatch({
      type: PLAYER_UPDATE_SCORE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PLAYER_UPDATE_SCORE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
